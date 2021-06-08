import styled, { css } from 'styled-components'

const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--branco)',
    thirdy: 'var(--preto)',
    cinza: 'var(--cinza)',
    cinza2: 'var(--cinza2)'
  },
  sizes: {
    normal: '1.9rem',
    large: '2.5rem',
    xlarge: '5rem'
  }
}

const Heading = styled('h1').attrs(({ level }) => ({
  as: `h${level}`
}))`
  ${({
    color = 'primary',
    fontWeight = '600',
    lineHeight = '55px',
    margin = '0',
    textAlign = 'center',
    textTransform = 'none',
    size = 'large'
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

export default Heading
