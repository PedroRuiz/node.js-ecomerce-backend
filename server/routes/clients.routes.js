/**
* Name: clients.routes
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/routes/clients.routes
*
* Created:  8 Aug 2018
*
*
* Description: routes for clients
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

const clientsController = require('../controllers/clients.controller');

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);

router.post('/', clientsController.createClient);
router.post('/email/:id', clientsController.pushEmails);
router.post('/address/:id', clientsController.pushAddresses);
router.post('/phone/:id', clientsController.pushPhones);
router.post('/paymentcard/:id', clientsController.pushPaymentCard);


router.put('/:id', clientsController.editClientSimpleData);
router.put('/email/:id/:email', clientsController.editEmailsData);
router.put('/address/:id/:address', clientsController.editAddressData);
router.put('/phones/:phone', clientsController.editPhonesData);
router.put('/paymentcard/:id/:idcard', clientsController.editPaymentCard);

router.delete('/email/:id/:email', clientsController.deleteEmails);
router.delete('/address/:id/:address', clientsController.deleteAddresses);
router.delete('/phone/:id/:phone', clientsController.deletePhones);
router.delete('/:id',clientsController.deleteClient);
router.delete('/paymentcard/:id/:idcard', clientsController.deletePaymentCard);

module.exports = router;
/** this ends this file
* server/routes/clients.routes
**/
