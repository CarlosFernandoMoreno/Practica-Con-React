import { MongoClient, MongoServerError } from "mongodb";
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const dbNombre = "ProyectoFinal";
const ColeccionDeCursos = "Cursos";
const coleccionDeAlumnos = "Alumnos";
const client = new MongoClient(connURL);
export {client,coleccionDeAlumnos,ColeccionDeCursos,dbNombre,connURL,MongoServerError};