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



