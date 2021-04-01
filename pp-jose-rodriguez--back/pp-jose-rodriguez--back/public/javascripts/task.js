const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//require('mongoose-type-email');
const TaskSchema= new Schema({
    nombre: String,
    correo: String,
    telefono: { type:String, maxlength: 10 },
    password:String,
    edad: Number,
    genero: Boolean,
    pasatiempo: String,
    registro: { type: Date, default: Date.now }
});

module.exports=mongoose.model('tasks', TaskSchema);