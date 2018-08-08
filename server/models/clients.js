/**
* Name: clients
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/models/clients
*
* Created:  8 Aug 2018
*
*
* Description: Clients data model
*
* Requirements: mongoose
*
* @package
* @property
*
* @version 1.0
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Client = new Schema({
    first_name: { type: String, required: true },
    second_name: { type: String, required: true },
    tax_id: { type: String, required: true, unique: true },
    addresses: [{
        street: { type: String, required: false },
        city: { type: String, required: false },
        province: { type: String, required: false },
        zip: { type: String, required: false },
        required: false
    }],
    phones: [{
        type: { enum: ["mobile", "phone", null] },
        number: { type: String, required: false },
        required: false
    }],
},{timestamps: true});

module.exports = Client;





/** this ends this file
* server/models/clients
**/
