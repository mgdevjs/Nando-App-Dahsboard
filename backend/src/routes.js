const express = require('express'); 

const routes = express.Router(); 
const ClientesController = require('./controllers/ClientesController'); 
routes.get('/clientes', ClientesController.buscar ); 

routes.get('/clientes/:id', ClientesController.detalhe);
routes.post('/clientes', ClientesController.criar) 
routes.put('/clientes/:id', ClientesController.atualizar); 

routes.delete('/clientes/:id', ClientesController.deletar); 
routes.delete('/clientes', ClientesController.deletarTudo); 

/*
*/

module.exports= routes; 