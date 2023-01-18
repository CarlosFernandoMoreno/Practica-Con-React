import { getMaterias } from "./bd.js";

const validarAlumno = (alumno) => {
const {apellido, nombre,dni,division}= alumno;
    if (!apellido || apellido === undefined || apellido === null) { return false };
    if (!nombre || nombre === undefined || nombre === null) { return false };
    if (!dni || dni === undefined || dni === null) { return false };
    if (!division || division === undefined || division === null) { return false }
    return true;
};
const Alumno = async (alumno) => {
    try {
        const materias = await getMaterias(alumno.division);

        const nuevoAlumno = {
            nombre: alumno.nombre,
            apellido: alumno.apellido,
            dni: Number(alumno.dni),
            division: alumno.division,
            materias,
            asistencia: []
        };

        return nuevoAlumno;

    } catch {
        error => { console.log(error) }
    }

}



export { validarAlumno, Alumno }

