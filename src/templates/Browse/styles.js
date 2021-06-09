import styled from 'styled-components'

export const MainProfile = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const ChoosePerfil = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 2rem;
  width: 57rem;
`

export const Profile = styled.li`
  margin: 0 1rem;
`

export const ButtonProfile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
`

export const ProfileThumb = styled.div`
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

  &.perfil1 {
    background-image: url('https://occ-0-596-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaA7MaRDIj4yVIVL7wsH189LAM6i4ygxOfCf3utKbbWtiurSzZnlNfKatgiWgp3RLWw-UZJTb9Qf8gL5u2v7LNAfjuog.png?r=b14');
  }

  &.perfil2 {
    background-image: url('https://occ-0-596-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVRCbSR_gUxzKn9lvbjV37527ALhcLROH3Mw0a5ZpF3e9RGOpBpY5X72qX2Hq7FwlkFu8rELUfCMLsRx_D9rEkME15pM.png?r=4c9');
  }

  &.infantil {
    background-image: url('https://occ-0-596-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcLIHTkNuA8jSxuJlbbZppCm90vEXAZ7nMv9P3Uqv0E-ufs9-AbpdXjBF3dF_imIb966YrjBqk-iJc25JoWLtqtqR5B3.png?r=1b8');
  }
`
