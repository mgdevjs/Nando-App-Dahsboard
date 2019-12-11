
  
const mongoose = require('mongoose'); 
const AdcClienteNoModel = mongoose.model('ClientesModel');

module.exports = {   
    async buscar(req, res ) {
 

const { page = 1 } = req.query; 
const buscar = await AdcClienteNoModel.paginate({}, { page, limit:10 });
return res.json(buscar); 
}, 

async criar(req, res){
    const criar = await AdcClienteNoModel.create(req.body); 

    return res.json(criar); 

}, 


    async detalhe(req, res) {
        const detalhe =  await AdcClienteNoModel.findById(req.params.id); 

        return res.json(detalhe);
    },

  
    async atualizar(req, res){
       
        const atualizar =  await AdcClienteNoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json('atualizado com sucesso!');
    },


   

    async deletar(req, res){ 
       await AdcClienteNoModel.findByIdAndRemove(req.params.id);
       return res.json('Apagado com sucesso'); // para não ficar vazio
    },

    async deletarTudo(req, res){
        await AdcClienteNoModel.remove();
        return res.json('Tudo foi deletado!!!');
    }

 }


