import styled from 'styled-components'

export const Container = styled.footer`
  align-items: center;
  border-top: 1px solid #36a9e0;
  display: flex;
  justify-content: center;
  height: 26px;
  width: 100%;
  background-color: #fefefe;

  & > strong {
    color: #8c8080;
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
  }
`

export const Ancor = styled.a`
  color: #8c8080;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #36a9e0;
  }
`
