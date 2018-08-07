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
router.post('/', productsController.createProduct);
router.put('/:id', productsController.editProduct);
router.get('/actives', productsController.getActives);
router.get('/actives/count', productsController.getActivesCount);
router.get('/inactives', productsController.getInactives);
router.get('/inactives/count', productsController.getActivesCount);
router.get('/:id', productsController.getProduct);

module.exports = router;

/** this ends this file
* server/routes/product.routes
**/
