import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Asistencia } from "./Asistencia";
export function ListAlumnos() {
    const [alumnos, setAlumnos] = useState([]);
    const { division } = useParams();
    useEffect(() => {
        fetch("http://localhost:3006/lista?division=" + division)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const alumnos = data.map(alumno => alumno);
                setAlumnos(alumnos);
            })
            .catch(err => (console.log(err)));
    }, [division]);
    return (

        <div className="album py-5">
            <div className="container" >
                <div className="row justify-content-center align-items-center g-2">
                    {
                        alumnos.map((alumno) =>

                            <div className="col-md-4" key={alumno.dni}>
                                <div className="card mb-4 shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top"></svg>
                                    <div className="card-body">
                                        <h5 className="card-title">{alumno.nombre}</h5>
                                        <p className="card-text">{alumno.dni}</p>
                                        <div className="d-flex justify-content-between aling-item-center">
                                            <div className="gtn-group">
                                                <Asistencia dni={alumno.dni}/>
                                                <Link className="btn btn-sm btn-outline-secondary">Editar</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}