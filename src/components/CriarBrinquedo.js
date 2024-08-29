import React, { useState } from 'react';
import axios from 'axios';

const CriarBrinquedo = () => {
    const [brinquedo, setBrinquedo] = useState({
        nome_BRINQUEDO: '',
        tipo_BRINQUEDO: '',
        classificacao_BRINQUEDO: '',
        tamanho_BRINQUEDO: '',
        preco_BRINQUEDO: ''
    });

    const [mensagem, setMensagem] = useState(''); // Estado para a mensagem de feedback

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBrinquedo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axios.post('https://brinquedotecaonline.fly.dev/api/brinquedos', brinquedo)
            .then(response => {
                setMensagem('Brinquedo adicionado com sucesso!'); // Define a mensagem de sucesso
                setBrinquedo({
                    nome_BRINQUEDO: '',
                    tipo_BRINQUEDO: '',
                    classificacao_BRINQUEDO: '',
                    tamanho_BRINQUEDO: '',
                    preco_BRINQUEDO: ''
                }); // Limpa os campos
            })
            .catch(error => {
                console.error('Erro ao criar brinquedo:', error);
                setMensagem('Erro ao adicionar o brinquedo.'); // Define a mensagem de erro
            });
    };

    return (
        <div>
            <h2>Criar Novo Brinquedo</h2>
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
            <button onClick={handleSubmit}>Criar</button>

            {mensagem && <p>{mensagem}</p>} {/* Exibe a mensagem de feedback no site */}
        </div>
    );
};

export default CriarBrinquedo;
