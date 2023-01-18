import { Router } from "express";
import {traerAlumnos, insertarUnAlumno, asistencia, confirmarAsistencia, confirmarAlumno } from '../bd.js';

const router = Router();


router.get("/lista", async (req, res) => {
    const division = req.query.division;
    const alumnos = await traerAlumnos(division);
    res.json(alumnos);

});


router.post("/insertarAlumno", async (req, res) => {
    let nuevoAlumno = req.body;
    if (!validarAlumno(nuevoAlumno)) {
        res.status(400).json("Los datos son incorrectos");
        return;
    };
    const resl = await confirmarAlumno(nuevoAlumno.dni);
    if (resl === 1) {
        res.status(400).json("El alumno ya existe");
        return;
    }
    const result = await insertarUnAlumno(nuevoAlumno);
    res.json(result).status(200);

});

router.put("/asistencia", async (req, res) => {
    const estado = req.body;
    const resl = await confirmarAsistencia(estado);
    if (resl) {
        res.json("capo ya tiene puesta la asistencia").status(204);
        return;
    }
    const result = await asistencia(estado);
    res.json(result).status(200);

})
router.put("/editarAlumno", (req, res) => {

});

export default router;