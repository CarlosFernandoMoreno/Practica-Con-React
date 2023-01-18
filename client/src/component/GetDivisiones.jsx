import { useState, useEffect } from "react";


export function GetDivisiones() {
    const [divisiones, setDivisiones] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3006/divisiones")
            .then((res) => res.json())
            .then((divisiones) => {
                console.log(divisiones);
                setDivisiones(divisiones);
            })
            .catch(err => (console.log(err)));
    }, []);
    return (
        divisiones.map((division) =>
            <option value={division} key={division}>{division}</option>
        )
    )
}

