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

const ClientSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    nick_name: { type: String, required: false, description: "too known as... as trade marks, and other"},
    
    tax_id: {
        tax_type: { type: String, required: true },
        tax_code: { type: String, requied: true, unique: true },
    },
    
    emails: [{
        email: {type: String, required: false},
        verified: { type: Boolean, required: false, default: false },
        
        required: false
    }],
    
    addresses: [{
        contact: {type: String, required: false, description: "use if client is not your contact"},
        street: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip: { type: String, required: true },
        
        required: false
    }],
    phones: [{
        phoneType: { type: String, required: false },
        prefix: { type: String, required: false},
        number: { type: String, required: true },
        subfix: { type: String, requied: false},
        memo: { type: String, required: false, description: "use if you need other data" },
        
        required: false
    }],
    payment_cards: [{
        card_name: { type: String, requied: true, index: true, trim: true},
        card_number: { type: String, required: true, index: true, trim: true},
        expiry_date: { type: Date, requied: true, trim: true},
        zip: { type: String, trim: true, required: false},
    
        requied: false
    }]
},{timestamps: true, autoIndex:true});

ClientSchema.index

module.exports = mongoose.model('customers', ClientSchema);



/** this ends this file
* server/models/clients
**/
