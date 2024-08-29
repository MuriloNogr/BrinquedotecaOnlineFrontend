import React, { useState } from 'react';
import axios from 'axios';

const AtualizarBrinquedo = () => {
    const [id, setId] = useState('');
    const [brinquedo, setBrinquedo] = useState({
        nome_BRINQUEDO: '',
        tipo_BRINQUEDO: '',
        classificacao_BRINQUEDO: '',
        tamanho_BRINQUEDO: '',
        preco_BRINQUEDO: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBrinquedo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        axios.put(`https://brinquedotecaonline.fly.dev/api/brinquedos/${id}`, brinquedo)
            .then(response => {
                console.log('Brinquedo atualizado:', response.data);
            })
            .catch(error => {
                console.error('Erro ao atualizar brinquedo:', error);
            });
    };

    return (
        <div>
            <h2>Atualizar Brinquedo</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Digite o ID do brinquedo"
            />
            <input
                type="text"
                name="nome_BRINQUEDO"
                value={brinquedo.nome_BRINQUEDO}
                onChange={handleChange}
                placeholder="Nome do Brinquedo"
            />
            <input
                type="text"
                name="tipo_BRINQUEDO"
                value={brinquedo.tipo_BRINQUEDO}
                onChange={handleChange}
                placeholder="Tipo do Brinquedo"
            />
            <input
                type="text"
                name="classificacao_BRINQUEDO"
                value={brinquedo.classificacao_BRINQUEDO}
                onChange={handleChange}
                placeholder="Classificação do Brinquedo"
            />
            <input
                type="text"
                name="tamanho_BRINQUEDO"
                value={brinquedo.tamanho_BRINQUEDO}
                onChange={handleChange}
                placeholder="Tamanho do Brinquedo"
            />
            <input
                type="text"
                name="preco_BRINQUEDO"
                value={brinquedo.preco_BRINQUEDO}
                onChange={handleChange}
                placeholder="Preço do Brinquedo"
            />
            <button onClick={handleUpdate}>Atualizar</button>
        </div>
    );
};

export default AtualizarBrinquedo;
