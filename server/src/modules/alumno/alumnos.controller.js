require('../../database/database.js');
const Alumno = require('./Alumno.model.js');


const traerAlumnos = async (division) => {
    try {
        const docs = await Alumno.find({ division: division });
        console.log(docs);
        return docs;
    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    };
};
const traerAlumno = async (dni) => {
    try {
        const alumno = await Alumno.findOne({ dni });
        console.log(alumno);
        return alumno;
    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    };
};
const insertarUnAlumno = async (alumno) => {
    try {
        const { nombre, apellido, dni, division } = alumno;
        const nuevoAlumno = new Alumno({
            nombre,
            apellido,
            dni,
            division,
        });
        const res = await nuevoAlumno.save();
        console.log(res);
        return (res);
    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    };
}
const putAlumno = async (dataUpdate) => {
    try {
        const { nombre, dni, apellido, division } = dataUpdate
        const alumno = await Alumno.updateOne({ dni }, {
            nombre,
            apellido,
            division,
            dni
        });
        return alumno;
    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    }
};
const confirmarAsistencia = async (estado) => {
    try {
        const { dni, fecha } = estado;
        const Doc = await collection.findOne({ dni: dni });
        return asistencia.some(asistencias => asistencias.fecha === fecha);

    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    };
};
const asistencia = async (alumno) => {
    try {
        const { fecha, estado, dni } = alumno;
        const insertResult = await collection.updateOne({ dni: dni },
            {
                $push: {
                    asistencia: {
                        fecha: fecha,
                        estado: estado,
                    }
                }
            })
        return insertResult;
    } catch (error) {
        console.log(`Error worth logging: ${error}`);
    };

};
module.exports = { traerAlumnos, insertarUnAlumno, asistencia, putAlumno, confirmarAsistencia,traerAlumno };