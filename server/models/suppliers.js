/**
* Name: suppliers
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/models/suppliers
*
* Created:  10 Aug 2018
*
*
* Description: suppliers data model
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

const Tax_id = new Schema({
    type: {type: String, enum:['personal','company'], default:'company', required: true},
    first_name: { type: String, required: true },
    last_name: { type: String, required: false},
    tax_id: { type: String, required: true, unique: true},
});

const Contacts = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    memo: { type: String, required: false }
});

const Phones = new Schema({
    phone_type: { type: String, enum: ['mobile', 'work', 'home', 'other'], default:'other', required: true},
    prefix: { type: String, required: false},
    number: { type: String, required: true},
    sufix: { type: String, required: false}
});

const Emails = new Schema({
    verified: { type: Boolean, required: true, default: false},
    email: { type: string, required: true}
});

const Addresses = new Schema({
    contact: { type: String, required: false},
    street: { type: String, required: true },
    city: { type: String, required: true},
    province: { type: String, required: true},
    zip: { type: String, required: true}
})

const SupplierSchema = new Schema({
    Tax_id: {Tax_id, required: true},
    Contacts: [{ type: Contacts, required: false}],
    Phones: [{ type: Phones, requied: false}],
    Emails: [{ type: Emails, requied: false}],
    Addresses: [{type: Addresses, requied: false}]
},{timestamps: true, autoIndex:true});

module.exports = {
    SupplierSchema: mongoose.model('suppliers', SupplierSchema),
    Tax_id: Tax_id,
    Contacts: Contacts,
    Phones: Phones, 
    Emails: Emails,
    Addresses: Addresses
}

/** this ends this file
* server/models/suppliers
**/
