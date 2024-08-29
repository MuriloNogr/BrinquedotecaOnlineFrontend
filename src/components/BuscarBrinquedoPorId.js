import React, { useState } from 'react';
import axios from 'axios';


const BuscarBrinquedoPorId = () => {
    const [id, setId] = useState('');
    const [brinquedo, setBrinquedo] = useState(null);
    const [erro, setErro] = useState('');

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handleSearch = () => {
        if (id.trim() === '') {
            setErro('Por favor, insira um ID válido.');
            setBrinquedo(null);
            return;
        }

        axios.get(`https://brinquedotecaonline.fly.dev/api/brinquedos/${id}`)
            .then(response => {
                setBrinquedo(response.data);
                setErro('');
            })
            .catch(error => {
                console.error('Erro ao buscar brinquedo:', error);
                setErro('Brinquedo não encontrado.');
                setBrinquedo(null);
            });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <h2>Buscar Brinquedo por ID</h2>
            <input
                type="text"
                value={id}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite o ID do brinquedo"
                style={{ marginRight: '8px' }}
            />
            <button onClick={handleSearch}>Buscar</button>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            {brinquedo && (
                <div>
                    <h3>Detalhes do Brinquedo</h3>
                    <p><strong>Nome:</strong> {brinquedo.nome_BRINQUEDO}</p>
                    <p><strong>Tipo:</strong> {brinquedo.tipo_BRINQUEDO}</p>
                    <p><strong>Classificação:</strong> {brinquedo.classificacao_BRINQUEDO}</p>
                    <p><strong>Tamanho:</strong> {brinquedo.tamanho_BRINQUEDO}</p>
                    <p><strong>Preço:</strong> {brinquedo.preco_BRINQUEDO}</p>
                </div>
            )}
        </div>
    );
};

export default BuscarBrinquedoPorId;