/**
* Name: product.controller
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/controllers/product.controller
*
* Created:  7 Aug 2018
*
*
* Description:
*
* Requirements:
*
* @package
* @property
*
* @version 1.0
*/

const productController = {};
const Product = require('../models/products');

productController.getProducts = async (req, res) => {
    const products = await Product.find();

    res.json(products);
};

productController.getCount = async (req, res) => {
    const count = await Product.countDocuments();

    res.json(count);
};

productController.createProduct = async (req, res) => {
    const product = new Product(req.body);

    await product.save( err => {
        if (err) 
        {
            res.json({"error": err});
        }
        else 
        {
            res.json({"status": "200"});
        }
    });
};

productController.editProduct = async (req, res) => {
    const { id } = req.params;

    const product = {
        code: req.body.code,
        description: req.body.description,
        size: req.body.size,
        weight: req.body.weight,
        price: req.body.price,
        discount: req.body.discount,
        on_sale: req.body.on_sale,
        active: req.body.active,
        stock: req.body.stock,
        broken_stock: req.body.broken_stock,
        to_serve: req.body.to_serve,
        to_receive: req.body.to_receive,
        ubication: req.body.ubication,
        images: req.body.images
    };

    await Product.findByIdAndUpdate(id, {$set: product}, {new: true});

    res.json({"status":"200"});
};

productController.getActives = async (req, res) => {
    const products = await Product.find({"active": true});

    res.json(products);
};

productController.getInactives = async (req, res) => {
    const products = await Product.find({ "active": false });

    res.json(products);
};

productController.getActivesCount = async (req, res) => {
    const products = await Product.find({"active": true}).countDocuments();

    res.json(products);
};

productController.getInactivesCount = async (req, res) => {
    const products = await Product.find({ "active": false }).countDocuments();

    res.json(products);
};

productController.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    res.json(product);
};

productController.deleteProduct = async (req, res) => {
    const { id } = req.params;

    await Product.findByIdAndRemove(id);

    res.json({"status": "200"});
};

productController.activateProduct = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    await Product.update({_id: id}, {$set: {active: true}}, () => {
        res.json({"status":"200"});
    });
};

productController.deactivateProduct = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    await Product.update({ _id: id }, { $set: { active: false } }, () => {
        res.json({ "status": "200" });
    });
};

productController.addImage = async (req, res) => {
    const { id } = req.params;
    
    const image = {
        image: req.body.image
    };
    const product = await Product.findById(req.params.id);
    
    product.images.push(image);
    await product.save( (err) => {
        if(err) {
            res.json(err);
        }
        else {
            res.json({"status": "200"});
        }
    });
    
};

productController.brokenStock = async (req, res) => {
    const broken = await Product.find( { $where: "this.broken_stock >= this.stock" } );

    res.json(broken);
};
    

module.exports = productController;

/** this ends this file
* server/controllers/product.controller
**/
