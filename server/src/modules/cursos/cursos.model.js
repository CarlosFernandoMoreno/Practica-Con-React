const { Schema, model } = require("mongoose");

const CursoSchema = new Schema({
    Division:{type:String},
    Turno:{type:String},
    Especialidad:{type:String},
    Materias:{ type: [Buffer]},
},{
    timestamps:true,
    versionKey:false
});
module.exports = model(`Curso`, CursoSchema);