'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function FormComponent() {

    const [quant, setQuant] = useState('');
    const [nome, setNome] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const quantidade = Number(quant);

        if (!quantidade || quantidade <= 0 || !nome.trim()) return;

        const novoItem = {
            id: Date.now(),
            quant: quantidade,
            nome: nome.trim()
        };

        setLista([...lista, novoItem]);

        setQuant('');
        setNome('');
    };

    // 👇 FUNÇÃO DE DELETE
    const removerItem = (id) => {
        const novaLista = lista.filter(item => item.id !== id);
        setLista(novaLista);
    };

    return (
        <div className={styles.container}>

            <h1>Lista de compras</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    type="number"
                    placeholder='Qtd'
                    value={quant}
                    onChange={e => setQuant(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Produto...'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            <div className={styles.historico}>
                <h3>Itens</h3>

                {lista.map(item => (
                    <div key={item.id} className={styles.item}>
                        <span>{item.quant}x {item.nome}</span>
                        <button 
                            className={styles.deleteBtn}
                            onClick={() => removerItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}