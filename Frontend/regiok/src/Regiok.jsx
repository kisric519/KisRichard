import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Regiok = (props) => {
    const [regiok, setRegiok] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:3333/regiok`)
            .then(res => res.json())
            .then(data => setRegiok(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 pb-2 bg-light-blue">Régiók</h1>
                <div className="row">
                        {regiok.map(regio => (
                            <div className="col-md-4">
                                <div className=" bg-light-blue br3 pa3 ma2 grow bw2 shadow-5" key={regio.id}>
                                    <p>Azonosito: {regio.Rid}</p>
                                    <p>Neve: {regio.regionev}</p>
                                    <p>Tipusa: {regio.regio_tipusa}</p>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Regiok;