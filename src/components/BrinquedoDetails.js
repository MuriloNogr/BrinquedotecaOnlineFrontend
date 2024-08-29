import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BrinquedoDetails = () => {
    const { id } = useParams();
    const [brinquedo, setBrinquedo] = useState(null);

    useEffect(() => {
        axios.get(`https://brinquedotecaonline.fly.dev/api/brinquedos/${id}`)
            .then(response => setBrinquedo(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!brinquedo) return <div>Loading...</div>;

    return (
        <div>
            <h1>{brinquedo.nome_BRINQUEDO}</h1>
            <p>Tipo: {brinquedo.tipo_BRINQUEDO}</p>
            <p>Classificação: {brinquedo.classificacao_BRINQUEDO}</p>
            <p>Tamanho: {brinquedo.tamanho_BRINQUEDO}</p>
            <p>Preço: {brinquedo.preco_BRINQUEDO}</p>
            <Link to={`/brinquedos/${brinquedo.id_BRINQUEDO}/atualizar`}>Editar</Link>


        </div>
    );
};

export default BrinquedoDetails;
