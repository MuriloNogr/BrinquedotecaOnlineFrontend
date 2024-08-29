import React, { useState } from 'react';
import axios from 'axios';


const DeletarBrinquedo = () => {
    const [id, setId] = useState('');

    const handleDelete = () => {
        axios.delete(`https://brinquedotecaonline.fly.dev/api/brinquedos/${id}`)
            .then(response => {
                console.log('Brinquedo deletado');
            })
            .catch(error => {
                console.error('Erro ao deletar brinquedo:', error);
            });
    };

    return (
        <div>
            <h2>Deletar Brinquedo</h2>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Digite o ID do brinquedo"
            />
            <button onClick={handleDelete}>Deletar</button>
        </div>
    );
};

export default DeletarBrinquedo;