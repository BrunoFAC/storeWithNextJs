import { Html, Head, Main, NextScript } from 'next/document';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function Document() {
    return (
        <Html>
            <Head />
            <body style={{ margin: 0 }}>
                <AppRouterCacheProvider>
                    <Main />
                    <NextScript />
                </AppRouterCacheProvider>
            </body>
        </Html>
    );
}
