import { useEffect, useState } from "react"
export function Asistencia({dni}){
const [estado, setEstado] = useState();
const date = new Date().toLocaleDateString();
useEffect(() => {
    if (!estado || estado === "" || estado === null || estado === undefined|| estado === []) {
        return;
    }
    fetch("http://localhost:3006/asistencia", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': 1000
        },
        body: JSON.stringify(estado)
    }).then(res => res.json()).then(response => console.log(response))
}, [estado])
return(<>
<button className="btn btn-sm btn-outline-secondary" onClick={() => { setEstado({ estado: "Presente", fecha: date, dni: dni })}}>Presente</button>
<button className="btn btn-sm btn-outline-secondary" onClick={() => { setEstado({ estado: "Presente", fecha: date, dni: dni })}}>Ausente</button></>)}