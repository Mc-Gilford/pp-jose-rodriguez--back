const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const TaskSchema= new Schema({
    Nombre: String,
    Correo: mongoose.SchemaTypes.Email,
    Teléfono: { String, maxlength: 10 },
    Contraseña:String,
    Edad: Number,
    Género: Boolean,
    Pasatiempo: String,
    Fecha_de_registro: { type: Date, default: Date.now }
});

module.exports=mongoose.model('tasks', TaskSchema);