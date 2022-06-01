import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: transparent;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.5;
  }

  img {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  }
`
