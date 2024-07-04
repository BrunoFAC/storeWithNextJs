import { ColorSchemeScript, createTheme } from "@mantine/core";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
});

export default function Document() {
  return (
    <Html>
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Main />
            <NextScript />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </Html>
  );
}
