/**
* Name: suppliers.routes
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/routes/suppliers.routes
*
* Created:  10 Aug 2018
*
*
* Description: routes for suppliers
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

const SuppliersController = require('../controllers/suppliers.controllers');

router.get('/', SuppliersController.getSuppliers);

router.post('/', SuppliersController.createSupplier);

module.exports = router;
/** this ends this file
* server/routes/suppliers.routes
**/
