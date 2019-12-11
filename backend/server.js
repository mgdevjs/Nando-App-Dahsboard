const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
require('./src/models/clientes'); 

const appExpress = express();
appExpress.use(cors()); 
appExpress.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true })

appExpress.use('/api', require('./src/routes')); 

appExpress.listen(3333); 



/*
 mongoose.connect(
'mongodb+srv://cluster0-m2bvq.mongodb.net/test?retryWrites=true&w=majority/',
{
    dbName: 'minhabase',
    user: 'deploy2',
    pass: 'deploy2123',
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(  () => console.log('Connected to MongoDB') )
*/
