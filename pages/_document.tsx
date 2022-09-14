import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,
} from 'next/document';
import Meta from '~/components/Meta';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
        <Meta />       
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    );
  }
}

export default MyDocument;
