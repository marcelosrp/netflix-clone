import styled from 'styled-components'

export const LoginBox = styled.section`
  background-color: rgba(0, 0, 0, 0.76);
  border-radius: 5px;
  height: 66rem;
  margin: 10rem 0;
  padding: 5rem;
  width: 45rem;

  @media (max-width: 700px) {
    border-radius: 0;
    height: auto;
    margin: 0;
    padding: 8rem 1.5rem 1.5rem 1.5rem;
    width: 100%;
  }

  form {
    margin-top: 2.5rem;
  }
`
