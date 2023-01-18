import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Home() {
    const [divisiones, setDivisiones] = useState([]);
    const [especialidad, setEspecialidad] = useState();
    useEffect(() => {
        if (especialidad === "" || especialidad === null || especialidad === undefined || especialidad === []) { return };
        fetch("http://localhost:3006/divisiones?especialidad=" + especialidad)
            .then((res) => res.json())
            .then((divisiones) => {
                console.log(divisiones);
                setDivisiones(divisiones);
            })
            .catch(err => (console.log(err)));
    }, [especialidad]);


    return (
        <div className="container d-flex m-4" >
            <div className="container-sm">
                <h1>Especialidades</h1>
                <div className="d-grid gap-2">
                    <button type="button" name="Informatica" id="Informatica" className="btn btn-primary" onClick={() => { setEspecialidad("Informatica") }}>Informatica</button>
                    <button type="button" name="Electromecanica" id="Electromecanica" className="btn btn-primary" onClick={() => { setEspecialidad("Electromecanica") }}>Electomecanica</button>
                    <button type="button" name="Construccion" id="Construccion" className="btn btn-primary" onClick={() => { setEspecialidad("Construccion") }}>Construccion</button>
                    <button type="button" name="Construccion" id="Construccion" className="btn btn-primary" onClick={() => { setEspecialidad("Ciclo_Basico") }}>Ciclo Basico</button>
                </div>
            </div>
            <div className="container row">
                <h1>Divisiones</h1>
                {
                    divisiones.map((division) =>
                        <div className="col p-2" key={division}>
                            <Link type="button" className="btn btn-primary btn-lg" to={"/listaAlumnos/"
                                + division} >{division}</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}