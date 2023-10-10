'use client'
import React, { useEffect, useState } from 'react'
import Personagem from '@/data/jogo'
import styles from './page.module.css'

function Page() {

    const [dadosApi, setdadosApi] = useState('');
    useEffect(() => {
        const PersonagemFetch = async () => {
            try {
                const dados = await Personagem();
                setdadosApi(dados);
                console.log(dados)
            } catch (e) {
                throw e;
            }
        }
        PersonagemFetch()
    }, [])
    return (
        <div className={styles.tudo}>
            <h1>API data</h1>
            <div className={styles.card}>
                {dadosApi ? (
                    dadosApi.data.map((joguinho) => (
                        <div className={styles.card2} key={joguinho.uuid} >
                            <h1 className={styles.joguinhoName}>{joguinho.displayName}</h1>
                            <img className={styles.img} src={joguinho.fullPortraitV2} alt={joguinho.displayName} width={400} height={400} />
                            <p className={styles.desc}>{joguinho.description}</p>

<div className={styles.habilides}>
                            {joguinho.abilities.map((ability) => (
                                <div key={ability.displayName} className={styles.cardzinho}>

                                    <p className={styles.skillname}>{ability.displayName}</p>
                                    <img className={styles.quasetd} src={ability.displayIcon} alt={ability.displayName} width={40} height={40} />
                                </div>
                            ))}
                        </div>
                        </div>
                    ))
                ) : (
                    <p>Carregando API...</p>
                )}
            </div>
        </div>
    );
}

export default Page;