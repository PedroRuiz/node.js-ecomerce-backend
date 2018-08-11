/**
* Name: suppliers.controller
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/controllers/suppliers.controller
*
* Created:  11 Aug 2018
*
*
* Description: controller for Suppliers
*
* Requirements: suppliers model
*
* @package
* @property
*
* @version 1.0
*/

const SuppliersController = {};

const Suppliers = require('../models/suppliers');

SuppliersController.getSuppliers = async (req, res) => {
    const suppliers = await Suppliers.find();

    res.json(suppliers);
};

SuppliersController.createSupplier = async (req, res) => {
    const supplier = req.body;

    Suppliers.create(supplier)
        .then( (response) => {
            console.log(response.id, "Supplier was created");
            res.json({"status": "200"});
        })
        .catch( err => {
            res.json(err.message);
            console.log(err.message);
        });
};

SuppliersController.deleteSupplier = async (req, res) => {
    const { id } = req.params;

    Suppliers.findByIdAndRemove(id)
        .then( (response) => {
            console.log('Deleted supplier: ',response.id);
            res.json({ "status": "200" });
        })
        .catch( (e) => {
            res.json(e);
        })
};

SuppliersController.editSupplier = async (req, res) => {
    const { id } = req.params;
    data = req.body;

    Suppliers.findOneAndUpdate(
        {"_id": id},
        { "$set": data}
    )
        .then( (response) => {
            res.json({ "status": "200" });
            console.log(response._id, "Was updated");
        })
        .catch( (e) => {
            res.json(e.message);
        })
};

SuppliersController.getSupplier = async (req, res) => {
    const { id } = req.params;

    Suppliers.findById( id )
        .then( (supplier) => {
            res.json(supplier);
        })
        .catch( (e) => {
            res.json(e.message);
        })
};




module.exports = SuppliersController;

/** this ends this file
* server/controllers/suppliers.controller
**/
