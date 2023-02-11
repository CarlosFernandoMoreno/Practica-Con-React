const { Router } = require("express");
const { traerCursos, traerTodosLosCursos, crearCurso } = require('./cursos.controller.js');

const router = Router();

router.get(`/divisiones`, async (req, res) => {
        const result = await traerTodosLosCursos();
        res.json(result).status(200);
});
router.get(`/cursos/:especialidad`, async (req, res) => {
        const { especialidad } = req.params;
        const result = await traerCursos(especialidad);
        res.json(result).status(200);
});
router.post(`/crearcurso`, async (req, res) => {
        let cursoData = req.body;
        const result = await crearCurso(cursoData);
        res.json(result).status(200);
});

module.exports = router;