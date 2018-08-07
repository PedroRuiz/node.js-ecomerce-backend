/**
* Name: database
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/database
*
* Created:  7 Aug 2018
*
*
* Description: mongo database connection
*
* Requirements: monggose
*
* @package commerce
* @property
*
* @version 1.0
*/
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/app-commerce';

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log(`${URI} is connected`))
    .catch( err => console.log(`Error en Mongo: ${err}`));

module.exports = mongoose;




/** this ends this file
* server/database
**/
