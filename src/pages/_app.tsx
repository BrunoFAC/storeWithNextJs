import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '../components/structure/structure.css';
import { Structure } from '../components';
import { Container } from '@mui/material';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider>
            <Head>
                <title>Store</title>
                <meta name="author" content="Bruno Carvalho" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Structure>
                <Container maxWidth="xl">
                    <Component {...pageProps} />
                </Container>
            </Structure>
        </MantineProvider>
    );
}
