import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import SzobaFoglaltsag from "../elemek/SzobaFoglaltsag";

const Foglaltsag = (() => {
    const [szobaid, setSzobaid] = useState("");
    const [szobak, setSzobak] = useState([]);

    function getSelected(event){
        const id = event.target.value
        setSzobaid(id)
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/szobak`)
            .then(res => {
                setSzobak(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Falusi szálláshely fajtái</h3>
                        <ul>
                            <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                            <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                            <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                            <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        </ul>
                        <img src="ketagyas.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h3>Válassz szobát:</h3>
                        <select onChange={(e) => getSelected(e)}>
                            <option value="" disabled selected>Válassz szobát</option>
                            {szobak.map(szoba => (
                                <option value={szoba.szazon}>{szoba.sznev}</option>
                            ))}
                        </select>
                        <br />
                        <SzobaFoglaltsag szobaid={szobaid} />
                    </div>
                </div>
            </div>
        </>
    )
})

export default Foglaltsag