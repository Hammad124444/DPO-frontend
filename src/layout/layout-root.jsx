import React from 'react';
import Head from "next/head";
import styles from '../../styles/Home.module.css'
import { UserAuthContext } from "../states/userAuth";
import {BackTop} from "antd";

export default function MLayOutRoot({children}) {
    return (
        <div className={styles.container}>
            <BackTop />
            <Head>
                <title>Direct Private Offers</title>
                <meta name="description" content="Direct Private Offers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <UserAuthContext.Provider value={UserAuthContext}>
                    {children}
                </UserAuthContext.Provider>
            </main>
        </div>
    )
}