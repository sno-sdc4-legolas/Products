const db = require('../db/postgres.js');
const { productQuery, stylesQuery, relatedQuery } = require('./queries.js');
const { parsePage } = require('../helpers/pageHelper.js');

module.exports = {
  getAllProducts: async (req, res) => {
    const page = parsePage(1, 5);
    const string = `SELECT * FROM product_list WHERE id BETWEEN ${page.first} AND ${page.last}`;
    try {
      const { rows } = await db.query(string);
      res.status(200).send(rows);
    } catch (e) {
      console.error(e);
      res.status(400).send(e);
    }
  },

  getProductByID: async (req, res) => {
    try {
      const string = productQuery(req, res);
      const { rows } = await db.query(string);
      res.status(200).send(rows[0].product_list[0]);
    } catch (e) {
        console.error(e);
        res.status(400).send(console.error(e));
    }
  },

  getStylesByProduct: async (req, res) => {
    try {
      const string = stylesQuery(req, res);
      const { rows } = await db.query(string);
      res.status(200).send(rows[0].json_build_object);
    } catch (e) {
        console.error(e);
        res.status(400).send(console.error(e));
    }
  },

  getRelated: async (req, res) => {
    try {
      const string = relatedQuery(req, res)
      const { rows } = await db.query(string);
      res.status(200).send(rows[0].related);
    } catch (e) {
      console.error(e);
      res.status(400).send(console.error(e));
    }
  },

}