import * as React from 'react'
import { NextPage } from 'next'

import styled, { css } from 'styled-components'

const IndexPage: NextPage = () => (
  <Div>
    Hello12f
  </Div>
)

const Div = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.yellow};
    background-color: ${theme.color.brandRed};
  `
}`

export default IndexPage
