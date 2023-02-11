const { Router } = require("express");
const { traerAlumnos, insertarUnAlumno, asistencia, confirmarAsistencia, putAlumno, traerAlumno } = require('./alumnos.controller.js');

const router = Router();


router.get("/lista", async (req, res) => {
    const division = req.query.division;
    const alumnos = await traerAlumnos(division);
    res.json(alumnos);

});
router.get("/alumno/:dni", async(req, res)=>{
    console.log(req.params);
    const alumno = await traerAlumno(dni);
    res.json(alumno);
})

router.post("/insertarAlumno", async (req, res) => {
    let nuevoAlumno = req.body;
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
router.put("/editaralumno/:id", async (req, res) => {
    try {
        const data = req.body;
        const response = await putAlumno(data);
        console.log(response);
        res.json("capo editaste con exito pa");
    } catch{
        console.log(error);
    }
});

module.exports = router;