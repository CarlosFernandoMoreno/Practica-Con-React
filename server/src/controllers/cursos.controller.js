
import{client,coleccionDeAlumnos,dbNombre,MongoServerError,ColeccionDeCursos} from '../database/database.js'

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
export { traerCursos,traerTodosLosCursos, getMaterias,confirmarAlumno};

/* const xd = async () => {
    const result = await traerTodosLosCursos();
    console.log(result);
    return;
}

xd(663408); */