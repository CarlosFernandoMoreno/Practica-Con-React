
const { client, dbNombre, MongoServerError, ColeccionDeCursos } = require('../../database/database.js');

const traerCursos = async (Especialidad) => {
    try {
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(ColeccionDeCursos);
        const filteredDocs = await collection.find({ Especialidad }).sort({ Division: 1 }).toArray();
        let divisiones = filteredDocs.map((division) => division.Division)
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
        let divisiones = Docs.map((division) => division.Division)
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
const crearCurso = async (curso) => {
    try {
        await client.connect();
        const db = client.db(dbNombre);
        const collection = db.collection(ColeccionDeCursos);
        const insertResult = await collection.insertOne({ curso });
        return 'Curso guardado';
    } catch {
        (error) => {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            };
        };
        throw error;
    }

}

module.exports = { traerCursos, traerTodosLosCursos, crearCurso };

/* const xd = async () => {
    const result = await traerTodosLosCursos();
    console.log(result);
    return;
}

xd(663408); */