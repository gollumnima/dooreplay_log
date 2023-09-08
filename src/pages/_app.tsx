/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '~/src/components/Layout';
import '~/src/styles/globals.css';
import '~/src/styles/custom.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#192a56'
    },
    secondary: {
      main: '#fff'
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
