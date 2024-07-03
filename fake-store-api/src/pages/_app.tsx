import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "../components/structure/structure.css";
import { Structure } from "../components";
import { Container } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Structure>
        <Container maxWidth="xl" style={{ paddingTop: 100 }}>
          <Component {...pageProps} />
        </Container>
      </Structure>
    </MantineProvider>
  );
}
