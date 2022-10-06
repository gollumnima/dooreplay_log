import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import Layout from '~/components/Layout';
import '~/styles/globals.css';
import '~/styles/main.css';
import '~/styles/custom.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
