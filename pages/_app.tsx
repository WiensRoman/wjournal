import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import 'macro-css';
import {theme} from '../theme';
import {ThemeProvider, CssBaseline} from "@mui/material";
import Head from "next/head";
import {Header} from "../components/Header"

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>WJournal</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp;