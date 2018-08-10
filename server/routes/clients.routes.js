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
router.post('/newemail/:id', clientsController.pushEmails);
router.post('/newaddress/:id', clientsController.pushAddresses);
router.post('/newphone/:id', clientsController.pushPhones);

router.put('/:id', clientsController.editClientSimpleData);
router.put('/email/:id/:email', clientsController.editEmailsData);
router.put('/address/:id/:address', clientsController.editAddressData);
router.put('/phones/:phone', clientsController.editPhonesData);

router.delete('/deleteemail/:id/:email', clientsController.deleteEmails);
router.delete('/deleteaddress/:id/:address', clientsController.deleteAddresses);
router.delete('/deletephone/:id/:phone', clientsController.deletePhones);
router.delete('/:id',clientsController.deleteClient);

module.exports = router;
/** this ends this file
* server/routes/clients.routes
**/
