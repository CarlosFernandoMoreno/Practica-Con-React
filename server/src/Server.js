//imports
const express = require('express');
const cors = require('cors');
const alumnosRoutes = require('./modules/alumno/alumnos.routes.js')
const cursosRoutes = require('./modules/cursos/cursos.routes.js')
//constantes
const app = express();
const port = 3006;
//Midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(alumnosRoutes);
app.use(cursosRoutes);

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});