import { MongoClient, MongoServerError } from "mongodb";
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const dbNombre = "ProyectoFinal";
const coleccionDeAlumnos = "Alumnos";
const client = new MongoClient(connURL);

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
}
const insertarUnAlumno = async (alumno) => {
/*     const nuevoAlumno = Alumno(alumno);
 */    try {
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
    };

};
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
export{traerAlumnos,insertarUnAlumno,asistencia,putAlumno,confirmarAsistencia};
/* const xd = async () => {
    const result = await traerTodosLosCursos();
    console.log(result);
    return;
}

xd(663408); */