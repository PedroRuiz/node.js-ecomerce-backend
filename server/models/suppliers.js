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
* Created:  11 Aug 2018
*
*
* Description: data model for suppliers
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

const SupplierSchema = new Schema({
    
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: false, trim: true },
    nick_name: { type: String, required: false, description: "too known as... as trade marks, and other", trim: true },
    commercial_name: { type: String, required: false, trim: true },
    tax_id: {
        tax_type: { type: String, enum: ['personal', 'company', 'other'], required: true },
        tax_code: { type: String, requied: true, unique: true },
        taxespercent: { type: Number, default: 21, requied: true},
        withholding_tax: { type: Number, default: 0, requied: true}
    },

    emails: [{
        email: { type: String, required: false, trim: true },
        verified: { type: Boolean, required: false, default: false, trim: true },

        required: false
    }],
    webs: [{
        web: { type: String, required: false, trim: true },

        required: false
    }],
    addresses: [{
        contact: { type: String, required: false, description: "use if supplier is not your contact", trim: true },
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        province: { type: String, required: true, trim: true },
        zip: { type: String, required: true, trim: true },

        required: false
    }],
    phones: [{
        phoneType: { type: String, required: false, trim: true },
        prefix: { type: String, required: false, trim: true },
        number: { type: String, required: true, trim: true },
        subfix: { type: String, requied: false, trim: true },
        memo: { type: String, required: false, description: "use if you need other data", trim: true },

        required: false
    }],
    banks_accounts: [{
        bank_name: { type: String, requied: true, index: true, trim: true },
        bank_address: {
            street : { type: String, requied: true, trim: true},
            city: { type: String, required: true, trim: true },
            province: { type: String, required: true, trim: true },
            zip: { type: String, required: false, trim: true },
        }, requied: true,

        account_number: { type: String, required: true, index: true, trim: true },
        requied: false
    }]
}, { timestamps: true, autoIndex: true });



module.exports = mongoose.model('suppliers', SupplierSchema);




/** this ends this file
* server/models/suppliers
**/
