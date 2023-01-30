 import { useState } from "react";
import { Link , useParams} from "react-router-dom";
import { GetDivisiones } from "./GetDivisiones";
export function PostAlumno() {
    const {id} = useParams;
    const [datos, setDatos] = useState();
    const formAlumno = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };
    const enviarDatos = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3006/insertarAlumno/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos),
        })
            .then(res => res.json()).catch(err => console.log(err))
            .then(response => console.log(response)) 

    }
    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={enviarDatos}>
                <div className="form-group">
                    <div className="m-3">
                        <h2>Registrar Alumno</h2>
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Name</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" placeholder="" aria-describedby="helpId" onChange={formAlumno} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Apellido</label>
                        <input type="text" name="apellido" id="apellido" className="form-control" placeholder="" aria-describedby="helpId" onChange={formAlumno} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">DNI</label>
                        <input type="text" name="dni" id="dni" className="form-control" placeholder="" aria-describedby="helpId" onChange={formAlumno} />
                    </div>
                    <div className="mb-2">
                        <div className="mb-3">
                            <label className="form-label">Division</label>
                            <select className="form-select form-select-lg" name="division" onChange={formAlumno}>
                                <option defaultValue="">Divsiones</option>
                                <GetDivisiones />
                            </select>
                        </div>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary">Guargar</button>
                        <Link className="btn btn-danger" to={"/"}>Cancelar</Link>
                    </div>
                </div>
            </form>
        </div>);
} 