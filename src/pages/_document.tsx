import { Html, Head, Main, NextScript } from 'next/document';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Store</title>
                <meta name="author" content="Bruno Carvalho" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body style={{ margin: 0 }}>
                <AppRouterCacheProvider>
                    <Main />
                    <NextScript />
                </AppRouterCacheProvider>
            </body>
        </Html>
    );
}
