module.exports = {
  productQuery: `SELECT json_build_object (
                  'id', p.product_id,
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
                          WHERE product_id=1
                  )
                ) product_list
                FROM product_list p
                WHERE product_id=1;`,

  stylesQuery: `SELECT json_build_object (
                'product_id', s.product_id,
                'results', (
                  SELECT json_build_object(
                    'style_id', s.style_id,
                    'name', s.style_name,
                    'original_price', s.original_price,
                    'sale_price', s.sale_price,
                    'default?', s.default_style,
                    'photos',(
                      SELECT json_agg(
                        json_build_object(
                        'url', p.url,
                        'thumbnail_url', p.thumbnail_url
                        )
                      ) photos
                      FROM photos p
                      WHERE style_id=1
                    ),
                    'skus', (
                      SELECT json_object_agg(
                        s.sku_id, json_build_object(
                          'quantity', s.quantity,
                          'size', s.size
                        )
                      ) skus
                      FROM skus s
                      WHERE style_id=1
                    )
                  )
                )
              ) styles
              FROM styles s
              WHERE product_id=1;`
}




