import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'macro-css';
import { theme } from '../theme';
import { ThemeProvider,CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );


}

export default MyApp;