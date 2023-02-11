const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        unique: true,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    asistencia: {
        type: [Buffer]
    },

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Alumno', AlumnoSchema); 