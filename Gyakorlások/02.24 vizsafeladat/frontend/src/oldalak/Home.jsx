import React from "react";
import { Link, NavLink } from 'react-router-dom'
import Szobak from "../elemek/Szobak";
import { useState, useEffect } from "react"

const Home = (() => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
                        <p>A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.  A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében. </p>
                        <Link to="">Tájékoztató oldal</Link><br />
                        <img src="logo.png" alt="" />
                        <br />
                        <img src="holloko_masolata.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <h3>Falusi szálláshely fajtái</h3>
                        <ul>
                            <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                            <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                            <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                            <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        </ul>
                        <img src="ketagyas.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <h3>A hét törpe fogadó</h3>

                        <Szobak />
                    </div>
                </div>
            </div>

        </>
    )
})

export default Home