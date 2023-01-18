import { MongoClient, MongoServerError } from "mongodb";
import { Alumno } from "../utils";
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const dbNombre = "ProyectoFinal";
const ColeccionDeCursos = "Cursos";
const coleccionDeAlumnos = "Alumnos";
const client = new MongoClient(connURL);


const traerCursos = async (Especialidad) => {
    try {
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(ColeccionDeCursos);
        const filteredDocs = await collection.find({ Especialidad }).sort({ Division: 1 }).toArray();
        let divisiones = filteredDocs.map((division)=>division.Division)
        return divisiones;
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }

};

const traerAlumnos = async (division) => {
    try {
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const docs = await collection.find({ division: division }).sort({ nombre: 1 }).toArray();
        return docs;
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }
};

const insertarUnAlumno = async (alumno) => {
    const nuevoAlumno = Alumno(alumno);
    try {
        const { nombre, apellido, dni, division, asistencia, materias } = alumno;
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const insertResult = await collection.insertOne({nuevoAlumno});
        return 'Alumno guardado';
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }

};

const asistencia = async (alumno) => {
    try {
        const { fecha, estado, dni } = alumno;
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const insertResult = await collection.updateOne({ dni: dni },
            {
                $push: {
                    asistencia: {
                        fecha: fecha,
                        estado: estado,
                    }
                }
            })
        return "Usuario Ingresado";
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }

}

const traerTodosLosCursos = async () => {
    try {
        await client.connect();

        const db = client.db(dbNombre);
        const collection = db.collection(ColeccionDeCursos);
        const Docs = await collection.find({}, { Division: 1 }).sort({ Division: 1 }).toArray();
        let divisiones = Docs.map((division)=>division.Division)
        return divisiones;
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }
};
const getMaterias = async (division) => {
    await client.connect();
    const db = client.db(dbNombre);
    const collection = db.collection(ColeccionDeCursos);
    try {
        const curso = await collection.findOne({ Division: division });
        const materias = curso.Materias;
        return materias;
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }

}
const putAlumno = async (dataUpdate) => {
    try {
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const alumno = await collection.updateOne({ dni: dataUpdate.dni }, {

        });
        return "Alumno editado";
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }
};

const confirmarAsistencia = async (estado) => {
    try {
        const { dni, fecha } = estado
        await client.connect();

        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const Doc = await collection.findOne({ dni: dni });
        const { asistencia } = Doc;
        await client.close();
        return asistencia.some(asistencias => asistencias.fecha === fecha);

    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }
}
const confirmarAlumno = async (dni) => {
    try {
        await client.connect();

        const db = client.db(dbNombre);
        const collection = db.collection(coleccionDeAlumnos);
        const result = await collection.count({ dni: dni });

        await client.close();
        return result;

    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }
}
export { traerCursos, traerAlumnos, insertarUnAlumno, asistencia, traerTodosLosCursos, getMaterias, confirmarAsistencia, confirmarAlumno, putAlumno };

/* const xd = async () => {
    const result = await traerTodosLosCursos();
    console.log(result);
    return;
}

xd(663408); */