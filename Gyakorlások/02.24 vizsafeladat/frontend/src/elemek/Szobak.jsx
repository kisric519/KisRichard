import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios'

const Szobak = (({id}) => {
    const [szobak, setSzobak] = useState([]);

    useEffect(() => {
        if(id){
            axios.get(`http://127.0.0.1:3001/szoba/`+id)
            .then(res => {
                console.log(res.data)
                setSzobak(res.data)
            })
            .catch(err => console.error(err));
        }else{
            axios.get(`http://127.0.0.1:3001/szobak`)
            .then(res => {
                setSzobak(res.data)
            })
            .catch(err => console.error(err));
        }
        
    }, [id]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Szoba neve</th>
                        <th scope="col">Ágyak száma</th>
                    </tr>
                </thead>
                <tbody>
                    {szobak.map(szoba => (
                        <tr key={szoba.szazon}>
                            <td>{szoba.sznev}</td>
                            <td>{szoba.agy}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
})

export default Szobak