/**
* Name: index
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/index
*
* Created:  7 Aug 2018
*
*
* Description: node index for commerce
*
* Requirements: express, morgan, mongoose, cors, nodemon
*
* @package commerce
* @property
*
* @version 1.0
*/
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

/**
 * S E T T I N G S
 */
app.set('port', process.env.PORT || 3000);

/**
 * M I D D L E W A R E S
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


/**
 * R O U T E S
 */ 
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/clients', require('./routes/clients.routes'));
app.use('/api/suppliers', require('./routes/suppliers.routes'));
/**
 * S T A R T I N G   S E R V E R
 */

app.listen(app.get('port'), (error) => {
    if (error)
    {
        console.log('Error on server: ',err);
    } 
    else {
        console.log('Server on port', app.get('port'));
    }
});

/** this ends this file
* server/index
**/
