'use client'

import { useState } from 'react';

import Botao from './Botao';

import styles from './page.module.css';

function Exemplo04() {

    const [exibir, setExibir] = useState("");

    const cadastrar = () => setExibir("Cadastrar");
    const editar = () => setExibir("Editar");
    const listar = () => setExibir("Listar");
    const excluir = () => setExibir("Excluir");
    const cancelar = () => setExibir("Cancelar");

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>
            <h2>O valor atual é: {exibir}</h2>

            <Botao texto="Cadastrar" aoClicar={cadastrar} acao={"cadastrar"} />
            <Botao texto="Editar" aoClicar={editar} acao={"editar"} />
            <Botao texto="Listar" aoClicar={listar} acao={"listar"} />
            <Botao texto="Excluir" aoClicar={excluir} acao={"excluir"} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={"cancelar"} />

        </div>
    );
}

export default Exemplo04;