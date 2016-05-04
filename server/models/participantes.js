var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipanteSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    especialidad: {type: String, required: true}
});

module.exports = mongoose.model('Participante', ParticipanteSchema);
