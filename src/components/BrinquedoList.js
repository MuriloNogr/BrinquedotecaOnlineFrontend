import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrinquedoList = () => {
    const [brinquedos, setBrinquedos] = useState([]);

    useEffect(() => {
        axios.get('https://brinquedotecaonline.fly.dev/api/brinquedos')
            .then(response => setBrinquedos(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Brinquedos</h1>
            <div>
                {brinquedos.map(brinquedo => (
                    <div key={brinquedo.id_BRINQUEDO}>
                        <h1>{brinquedo.nome_BRINQUEDO}</h1>
                        <h2>{brinquedo.tipo_BRINQUEDO}</h2>
                        <Link to={`/brinquedos/${brinquedo.id_BRINQUEDO}`}>Ver detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrinquedoList;
