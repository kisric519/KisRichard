import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Termekek = (props) => {
    const [termekek, setTermekek] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapiserver.reactbd.com/products`)
            .then(res => res.json())
            .then(data => setTermekek(data))
    }, []);
    return (
        <div className="container-fluid bg-light-gray"> 
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 bg-light-blue">Kollekciók</h1>
                <div className="row">
                        {termekek.map(termek => (
                            <div className="col-md-4">
                                <div className=" bg-light-blue br3 pa3 ma2 grow bw2 shadow-5" key={termek._id}>
                                    <h2 className="text-center">{termek.title}</h2>
                                    <img className="mb-1" src={termek.image} />
                                    <h2>Ára:</h2>
                                    <span>${termek.price}</span>
                                    <h2>Leírás:</h2>
                                    <span>{termek.description}</span>
                                    <h2>Kategória:</h2>
                                    <span>{termek.category}</span>
                                    <h2>Raktáron:</h2>
                                    <span>{termek.rating} db</span>
                                </div>
                            </div>
                            
                        ))}
                </div>
            </article>
        </div>
    );
}

export default Termekek;