import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios'
import Szobak from "./Szobak";

const SzobaFoglaltsag = (({szobaid}) => {
    const [szobak, setSzobak] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/szoba/`+szobaid)
            .then(res => {
                setSzobak(res.data)
            })
            .catch(err => console.error(err));
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
            <h2>Szoba foglaltásga:</h2>
        </>
    )
})

export default SzobaFoglaltsag