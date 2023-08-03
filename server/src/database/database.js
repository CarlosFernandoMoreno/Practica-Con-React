const { MongoClient, MongoServerError } = require("mongodb");
const dbNombre = "ProyectoFinal";


const mongoose = require('mongoose');

mongoose.set('strictQuery', true); 
mongoose.connect(connURL, {
    UseNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('open', _ => {
    console.log('database is connected to', connURL)
})

module.exports = { dbNombre, connURL, MongoServerError }; 

'mongodb+srv://username:badpw@cluster0-OMITTED.mongodb.net/' + 'test?retryWrites=true&w=majority';
