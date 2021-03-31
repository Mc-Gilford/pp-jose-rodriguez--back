const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const TaskSchema= new Schema({
    Nombre: String,
    Correo: mongoose.SchemaTypes.Email,
    Tel�fono: { String, maxlength: 10 },
    Contrase�a:String,
    Edad: Number,
    G�nero: Boolean,
    Pasatiempo: String,
    Fecha_de_registro: { type: Date, default: Date.now }
});

module.exports=mongoose.model('tasks', TaskSchema);