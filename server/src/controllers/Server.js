//imports
import express from 'express';
import cors from 'cors';
import alumnosRoutes from '../routes/alumnos.routes.js'
import cursosRoutes from '../routes/cursos.routes.js'
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