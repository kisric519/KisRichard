import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios'
import Szobak from "./Szobak";

const SzobaFoglaltsag = (({szobaid}) => {
    const [szobafoglalasok, setSzobaFoglalasok] = useState([]);

    function datum(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      }
      

    useEffect(() => {
        if(szobaid){
            axios.get('http://127.0.0.1:3001/szobafoglaltsag/'+szobaid)
            .then(res => {
                setSzobaFoglalasok(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err));
        }
    }, [szobaid]);

    if(szobaid == ""){
        return (
            <>
                <br />
                <h6>Válassz szobát a foglaltság megtekintéséhez</h6>
            </>
        )
    }

    return (
        <>
            <h2>Szoba adatai</h2>
            <Szobak id={szobaid}/>
            <br />
            <h2>Szoba foglaltsága:</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Szoba neve</th>
                        <th scope="col">Érkezés dátuma</th>
                        <th scope="col">Távozás dátuma</th>
                    </tr>
                </thead>
                <tbody>
                    {szobafoglalasok.map(foglalas => (
                        <tr key={foglalas.id}>
                            <td>{foglalas.vnev}</td>
                            <td>{datum(foglalas.erk)}</td>
                            <td>{datum(foglalas.tav)}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
})

export default SzobaFoglaltsag