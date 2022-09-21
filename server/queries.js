module.exports = {
  productQuery: (req, res) => `SELECT json_agg ( json_build_object (
                  'id', p.id,
                  'name', p.name,
                  'slogan', p.slogan,
                  'description', p.description,
                  'category', p.category,
                  'features', (
                        SELECT
                          json_agg(
                            json_build_object(
                              'feature', f.feature,
                              'value', value
                            )
                          ) features
                          FROM features f
                          WHERE product_id=${req.params.product_id}
                      )
                  )
                ) product_list
                FROM product_list p
                WHERE id=${req.params.product_id};`,

  stylesQuery: (req, res) => `SELECT json_build_object(
                  'product_id', '${req.params.product_id}',
                  'results', (
                    SELECT json_agg( json_build_object(
                    'style_id', st.style_id,
                    'name', st.style_name,
                    'original_price', st.original_price,
                    'sale_price', st.sale_price,
                    'default?', st.default_style,
                    'photos', (
                        SELECT json_agg( json_build_object(
                        'url', ph.url,
                        'thumbnail_url', ph.thumbnail_url
                        )
                        ) photos
                        FROM photos ph
                        WHERE style_id=st.style_id
                      ),
                    'skus', (
                      SELECT json_object_agg(
                        s.sku_id, json_build_object(
                          'quantity', s.quantity,
                          'size', s.size
                          )
                        ) skus
                        FROM skus s
                        WHERE style_id=st.style_id
                      )
                    )
                  ) styles
                  FROM styles st
                  WHERE product_id=${req.params.product_id}
                )
              );`,

  relatedQuery: (req, res) => `SELECT json_agg(
                r.related_product_id
              )related
              FROM related r
              WHERE current_product_id=${req.params.product_id};`
}
