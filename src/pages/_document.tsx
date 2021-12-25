import Document, { Html, Head, Main, NextScript } from 'next/document'

import { Children } from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <title>Test Site</title>

          <meta name="description" content="" />
          <meta name="keywords" content="" />

          <meta name="author" content="lu.perfect" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto&family=Open+Sans&&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </Head>
        <body>
          <noscript>
            Вам необходимо включить JavaScript для запуска этого приложения.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => <App {...props} />,
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles)],
  }
}

export default MyDocument
