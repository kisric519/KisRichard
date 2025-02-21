import React from "react";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Regiok = (props) => {
    const [regiok, setRegiok] = useState([]);
    const [regioktipusa, setRegiokTipusa] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3333/regiok`)
            .then(res => {
                setRegiok(res.data)
                setRegiokTipusa(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    function getSelected(event){
        const id = event.target.value
        axios.get(`http://127.0.0.1:3333/regio/`+id)
            .then(res => setRegiok(res.data))
            .catch(err => console.error(err));
    }
    
    return (
        <div className="container-fluid bg-light-gray">
            <article className="row justify-content-center ">
                <h1 className="text-center display-4 mt-5 mb-5 pb-2 bg-light-blue">Régiók listába</h1>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Régió neve</th>
                                <th scope="col">Típusa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {regiok.map(regio => (
                                <tr key={regio.Rid}>
                                    <th scope="row">{regio.Rid}</th>
                                    <td>{regio.regionev}</td>
                                    <td>{regio.regio_tipusa}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    <label>
                        Régiók listája
                        <select onChange={(e) => getSelected(e)}>
                            <option value="" disabled selected>Válassz régiót</option>
                            {regioktipusa.map(regio => (
                                <option value={regio.Rid}>{regio.regionev}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </article>
        </div>
    );
}

export default Regiok;