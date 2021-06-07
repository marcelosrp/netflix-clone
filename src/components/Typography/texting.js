import styled, { css } from 'styled-components'

const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--branco)',
    thirdy: 'var(--preto)'
  },
  sizes: {
    normal: '1rem',
    large: '1.9rem',
    xlarge: '2.6rem'
  }
}

const Texting = styled('p')`
  ${({
    color = 'primary',
    fontWeight = '400',
    lineHeight = '55px',
    textAlign = 'center',
    textTransform = 'normal',
    size = 'large'
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.sizes[size]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-align: ${textAlign};
    text-transform: ${textTransform};
  `}
`

export default Texting
