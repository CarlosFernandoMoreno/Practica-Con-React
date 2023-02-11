
const { client, coleccionDeAlumnos, dbNombre, MongoServerError, ColeccionDeCursos } = require('../../database/database.js');

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


module.exports = { getMaterias }

