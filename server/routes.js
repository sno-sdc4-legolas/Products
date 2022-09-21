const Router = require('express-promise-router');
const { getAllProducts,
        getProductByID,
        getStylesByProduct,
        getRelated } = require('./controller.js');



const router = new Router();

router.get(`/`, getAllProducts);

router.get(`/:product_id`, getProductByID);

router.get(`/:product_id/styles`, getStylesByProduct);

router.get(`/:product_id/related`, getRelated);

module.exports = router;

