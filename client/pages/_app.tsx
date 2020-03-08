import * as React from 'react'
import App from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/GlobalStyle'
import { theme } from '@/constants/theme'

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
