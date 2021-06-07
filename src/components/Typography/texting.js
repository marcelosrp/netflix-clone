import styled, { css } from 'styled-components'

const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--branco)',
    thirdy: 'var(--preto)'
  },
  sizes: {
    normal: '1.6rem',
    large: '2rem',
    xlarge: '2.6rem'
  }
}

const Texting = styled('p')`
  ${({
    color = 'primary',
    fontWeight = '400',
    lineHeight = '32px',
    margin = '0',
    textAlign = 'center',
    textTransform = 'none',
    size = 'normal'
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.sizes[size]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    margin: ${margin};
    text-align: ${textAlign};
    text-transform: ${textTransform};
  `}
`

export default Texting
