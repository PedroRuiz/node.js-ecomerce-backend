/**
* Name: product.routes
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/routes/product.routes
*
* Created:  7 Aug 2018
*
*
* Description: routes declaration for products
*
* Requirements: express
*
* @package
* @property
*
* @version 1.0
*/

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/product.controller');

router.get('/', productsController.getProducts);
router.get('/count', productsController.getCount);
router.get('/actives', productsController.getActives);
router.get('/actives/count', productsController.getActivesCount);
router.get('/inactives', productsController.getInactives);
router.get('/inactives/count', productsController.getActivesCount);
router.get('/brokenstock', productsController.brokenStock);
router.get('/:id', productsController.getProduct);
router.get('/activate/:id', productsController.activateProduct);
router.get('/deactivate/:id', productsController.deactivateProduct);

router.put('/:id', productsController.editProduct);
/*
    send as request body:

    {
        "image": "https://unsplash.com/photos/yC-Yzbqy7PY"
    }
*/
router.put('/addimage/:id', productsController.addImage);

router.post('/', productsController.createProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;

/** this ends this file
* server/routes/product.routes
**/
 