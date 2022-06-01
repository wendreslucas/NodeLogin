import styled from 'styled-components'
import media from '../../../ui/media'

export const StyleButton = styled.button`
  background: #36a9e0;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background: #777777;
  }

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.8)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }

  ${media.mobile} {
    font-size: 14px;
    margin-left: 25px;
    margin-top: 0;
    width: 80%;
  }
`
