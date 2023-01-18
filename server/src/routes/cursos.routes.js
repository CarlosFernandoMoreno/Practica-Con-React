import { Router } from "express";
import { traerCursos, traerTodosLosCursos } from '../bd.js';

const router = Router();

router.get("/divisiones", async (req, res) => {
    const especialidad = req.query.especialidad;
    if (especialidad === "" || especialidad === null || !especialidad || especialidad === undefined) {
        const result = await traerTodosLosCursos();
        res.json(result).status(200);

    } else {
        const result = await traerCursos(especialidad);
        res.json(result).status(200);

    }

});

export default router;