const Router = require('express-promise-router');
const { getAllProducts,
        getProductByID,
        getStyles,
        getFeatures,
        getRelated,
        getPhotos,
        getSkus
      } = require('./controller.js');



const router = new Router();

router.get('/', getAllProducts);

router.get('/product_id', getProductByID);

router.get('/styles', getStyles);

router.get('/features', getFeatures);

router.get('/related', getRelated);

router.get('/photos', getPhotos);

router.get('/skus', getSkus);

module.exports = router;

