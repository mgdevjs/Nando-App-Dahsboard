
const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({ 
Cliente: { 
    type: String,      
    required:  true, 
    },
Valor_Mensal: { 
    type: Number, 
    required:  true,

    },
Dia_de_Pagamento: {
    type: Number,
    },
    
Telefones: {
    type: String
},    
    Criado_Em: {
    type: Date, 
    default: Date.now 
        
    
    }

});

ProductSchema.plugin(mongoosePaginate); 
mongoose.model('ClientesModel', ProductSchema); 