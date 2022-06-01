import styled from 'styled-components'

export const StyleDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 100%;
  background-color: #1e1e1e;
  background-color: #fefefe;
`
export const StyleImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Imagem = styled.img`
  filter: drop-shadow(-3px -3px 2px rgba(255, 255, 255, 0.3))
    drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
    drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
