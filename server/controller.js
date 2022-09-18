const db = require('../db/postgres.js');

module.exports = {
  getAllProducts: async (req, res) => {
    const string = 'SELECT * FROM product_list';
    const { rows } = await db.query(string);
    res.send(rows);
  },

  getProductByID: async (req, res) => {
    const string = `SELECT * FROM product_list WHERE product_id=${req.query.product_id}`;
    const { rows } = await db.query(string)
    res.send(rows);
  },

  getStyles: async (req, res) => {
    const string = 'SELECT * FROM styles';
    const { rows } = await db.query(string)
    res.send(rows);
  },

  getFeatures: async (req, res) => {
    const string = 'SELECT feature_id, feature, value FROM features WHERE product_id=1';
    const { rows } = await db.query(string)
    res.send(rows);
  },

  getRelated: async (req, res) => {
    const string = 'SELECT current_product_id, related_product_id FROM related WHERE current_product_id=1';
    const { rows } = await db.query(string)
    res.send(rows);
  },

  getPhotos: async (req, res) => {
    const string = `SELECT * FROM photos WHERE style_id=1`;
    const { rows } = await db.query(string)
    res.send(rows);
  },

  getSkus: async (req, res) => {
    const string ='SELECT sku_id, size, quantity FROM skus WHERE style_id=1';
    const { rows } = await db.query(string)
    res.send(rows);
  },
}