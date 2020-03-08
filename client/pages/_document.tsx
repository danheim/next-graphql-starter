import React, { ComponentClass } from 'react'
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document<{}> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: ComponentClass<any>) => (props: any) => sheet
          .collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        ['styles' as string]: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900|Roboto+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
