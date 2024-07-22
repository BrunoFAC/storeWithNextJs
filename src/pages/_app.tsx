import type { AppProps } from 'next/app';
import '../components/structure/structure.css';
import { Structure } from '@/components';
import { Container } from '@mui/material';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Store</title>
                <meta name="author" content="Bruno Carvalho" />
                <link rel="icon" href="./favicon.ico" sizes="32x32" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Structure>
                <Container maxWidth="xl">
                    <Component {...pageProps} />
                </Container>
            </Structure>
        </>
    );
}
