'use client'

import { useState } from "react";
import styles from "./page.module.css";
export default function Exemplo03() {

    const [som, setSom] = useState(0);
    const [sub, setSub] = useState(0);

    function handleSoma() {
        setSom(som + 1);
    }

    function handleSub() {
        setSub(sub - 1);
    }

    const valor = som + sub;

    return (
        <>
            <div className={styles.container}>
                <label className={styles.label}>{`Batons passados hj: ${valor}`}</label>
                <button onClick={() => handleSoma()} className={styles.button1}>+1</button>
                <button onClick={() => handleSub()} className={styles.button2}>-1</button>
            </div>
        </>
    );
}