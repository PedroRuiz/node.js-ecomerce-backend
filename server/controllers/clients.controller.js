/**
* Name: clients.controller
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/controllers/clients.controller
*
* Created:  8 Aug 2018
*
*
* Description: controller for clients
*
* Requirements: clients model
*
* @package
* @property
*
* @version 1.0
*/

const clientsController = {};
const Clients = require('../models/clients');;

clientsController.getClients = async (req, res) => {
    const clients = await Clients.find();

    res.json(clients);
};

clientsController.createClient = async (req, res) => {
    const client = new Clients(req.body);

    await client.save(err => {
        if (err) {
            res.json({ "error": err });
        }
        else {
            res.json({ "status": "200" });
        }
    });
};

clientsController.editClientSimpleData = async (req, res) => {
    const { id } = req.params;
    
    let cliente = await Clients.findById(id);


   cliente.first_name = req.body.first_name;
   cliente.last_name = req.body.last_name;
   cliente.nick_name = req.body.nick_name;
   cliente.tax_id.tax_type = req.body.tax_id.tax_type;
   cliente.tax_id.tax_code = req.body.tax_id.tax_code;
   cliente.emails = cliente.emails;
   cliente.addresses = cliente.addresses;
   cliente.phones = cliente.phones;

    await cliente.save()
        .then( () => {
            res.json({ "status": "200"});
        } );

};

clientsController.editEmailsData = async (req, res) => {
    /*
        model for req: 
            {
                "verified": false,
                "email": "correo@pedroruizhidalgo.es"
            }
    */
    const { id } = req.params;
    const { email }  = req.params;
   
    await Clients.findOneAndUpdate(
        {"_id": id, "emails._id": email},
        { '$set': {
            'emails.$': req.body
        }})
            .then( doc => {
                res.json({"status": "200"});
            })
            .catch( e => {
                console.log(e);
            });
};

clientsController.editAddressData = async (req, res) => {

    /*
        model for req: 
        {
            "contact": "contact", no required
            "street": "street", required
            "city": "city", required
            "province": "province", required
            "zip": "zip", required
        }
    */

    const { id } = req.params;
    const { address } = req.params;

    await Clients.findOneAndUpdate(
        {"_id": id, "addresses._id": address},
        { "$set": { "addresses.$" : req.body } }
    )
        .then(doc => {
            res.json({ "status": "200" });
        })
        .catch(e => {
            console.log(e);
        });
};

clientsController.editPhonesData = async (req, res) => {
    /*
        model for phones
    {
        phoneType: { type: String, required: false },
        prefix: { type: String, required: false},
        number: { type: String, required: true },
        subfix: { type: String, requied: false},
        memo: { type: String, required: false, description: "use if you need other data" },

        required: false
    }
    */

    const { id } = req.params;
    const { phone } = req.params;

    await Clients.findOneAndUpdate(
        { "_id": id, "phones._id": phone },
        { "$set": { "phones.$": req.body } }
    )
        .then(doc => {
            res.json({ "status": "200" });
        })
        .catch(e => {
            console.log(e);
        });

};

clientsController.pushEmails = async (req, res) => {
    const newEmails = req.body;
    const { id } = req.params;


    await Clients.findById(id)
        .then ( (client) => {
            client.emails.push(newEmails);
            client.save();
        }).catch ( (e) => {
            console.log(e);
        }).then (
            res.json({"status":"200"})
        );
    
};

clientsController.pushAddresses = async (req, res) => {
    const newAddresses = req.body;
    const { id } = req.params;

    await Clients.findById(id)
        .then( (client) => {
            client.addresses.push(newAddresses);
            client.save();
        }).catch( e => console.log(e)).then(
            res.json({"status":"200"})
        );
};

clientsController.pushPhones = async (req, res) => {
    const newPhones = req.body;
    const { id } = req.params;

    await Clients.findById(id)
        .then((client) => {
            client.phones.push(newPhones);
            client.save();
        }).catch(e => console.log(e)).then(
            res.json({ "status": "200" })
        );
};

clientsController.deleteEmails = async (req, res) => {
    const { email } = req.params;
    const { id } = req.params;

    await Clients.update(
        {_id: id},
        { $pull: {emails: {_id: email} } },
        { safe: true}
    )
        .then( (client) => {
            console.log(client);
        })
        .catch( e => console.log(e))
        .then( () => {
            res.json({"status": "200"});
        })
};

clientsController.deleteAddresses = async (req, res) => {
    const { address } = req.params;
    const { id } = req.params;

    await Clients.update(
        {_id: id},
        { $pull: {addresses: {_id: address} } },
        {safe: true}
    )
        .then( ( response ) => {
            console.log(client);
        })
        .catch( e => console.log(e))
        .then( () => {
            res.json({"status": "200"});
        });
};

clientsController.deletePhones = async (req, res) => {
    const { phone } = req.params;
    const { id } = req.params;

    await Clients.update(
        {_id: id },
        { $pull: {phones: {_id: phone} } },
        { safe:true }
    )
        .then( ( response ) => {
            console.log(response);
        })
        .catch( e => console.log(e))
        .then( () => {
            res.json({"status": "200"});
        });
        
};

clientsController.deleteClient = async (req, res) => {
    const { id } = req.params;

    await Clients.findByIdAndRemove(id)
        .then( () => {
            res.json({"status":"200"});
        });
};

clientsController.getClient = async (req,res) => {
    const { id } = req.params;

    await Clients.findById(id)
        .then( (response) => {
            res.json(response);
        }
    );
};

clientsController.pushPaymentCard = async (req, res) => {
    const payment_card = req.body;
    const { id } = req.params;

    await Clients.findById(id)
        .then((client) => {
            client.payment_cards.push(payment_card);
            client.save();
        }).catch(e => console.log(e))
        .then(
            res.json({ "status": "200" })
        );
};

clientsController.editPaymentCard = async (req, res) => {
    const { id } = req.params;
    const { idcard } = req.params;

    await Clients.findOneAndUpdate(
        { "_id": id, "payment_cards._id": idcard },
        { "$set": { "payment_cards.$": req.body } }
    )
        .then(doc => {
            res.json({ "status": "200" });
        })
        .catch(e => {
            console.log(e);
        });
};

clientsController.deletePaymentCard = async (req, res) => {
    const { idcard } = req.params;
    const { id } = req.params;

    await Clients.update(
        { _id: id },
        { $pull: { payment_cards: { _id: idcard } } },
        { safe: true }
    )
        .then((response) => {
            console.log(response);
        })
        .catch(e => console.log(e))
        .then(() => {
            res.json({ "status": "200" });
        });
};


module.exports = clientsController;

/** this ends this file
* server/controllers/clients.controller
**/
