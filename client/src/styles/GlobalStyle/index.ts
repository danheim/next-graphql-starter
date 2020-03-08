import reset from 'styled-reset'
import { createGlobalStyle, css } from 'styled-components'
import { ThemeType } from '@/constants/theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => css`
     ${reset};
    * {
      box-sizing: inherit;
    }

    body {
      font-family: ${theme.fontFamily.roboto};
      color: ${theme.color.text};
      box-sizing: border-box;
      font-size: 14px;
    }

    a {
      color: currentColor;
      text-decoration: none;
      &:focus,
      &:active {
        outline: none;
      }
    }
  `
}`
