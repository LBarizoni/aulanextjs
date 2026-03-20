'use client'

import { useState } from "react";
import styles from "./page.module.css";
export default function Exemplo03() {  

    const [som, setsom] = useState(0);
    const [sub, setsub] =;

    function handleIncrementa () {
        setNum(num + 69);
    }

    return (
        <>
            <div className={styles.container}>
            <label>{`Batons passados hj: ${num}`}</label>            
            <button onClick={() => handleIncrementa()} className={styles.button}>+1</button>
            </div>
        </>
    );
}