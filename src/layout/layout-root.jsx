import React, {useContext, useEffect} from 'react';
import Head from "next/head";
import styles from '../../styles/local/Home.module.scss'
import MKBackTop from "../core/ui-kit/backtop/backtop";


export default function MLayOutRoot({children}) {

    return (
        <div className={styles.container}>
            <MKBackTop />
            <Head>
                <title>Direct Private Offers</title>
                <meta name="description" content="Direct Private Offers" />
                <link rel="icon" href="/assets/images/handshake.png" />
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}