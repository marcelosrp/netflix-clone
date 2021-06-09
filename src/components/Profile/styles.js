import styled from 'styled-components'

export const Profile = styled.div`
  margin: 0 1rem;
`

export const ButtonProfile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
`

export const ProfileThumb = styled.div`
  background-image: url('${(props) => (props.bg ? props.bg : null)}');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  height: 12.3rem;
  margin-bottom: 0.5rem;
  position: relative;
  width: 12.3rem;

  &::before {
    border: 0.3em solid transparent;
    border-radius: 4px;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      border-color: var(--branco);
    }

    & ~ p {
      color: var(--branco);
    }
  }

  &.infantil {
    background-image: url('https://occ-0-596-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcLIHTkNuA8jSxuJlbbZppCm90vEXAZ7nMv9P3Uqv0E-ufs9-AbpdXjBF3dF_imIb966YrjBqk-iJc25JoWLtqtqR5B3.png?r=1b8');
  }
`
