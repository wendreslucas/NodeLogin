import styled from 'styled-components'
import media from '../../../ui/media'

export const StyleTextArea = styled.textarea`
  background-color: #262425;
  border-radius: 4px;
  border: 1px solid #777777;
  color: #8c8080;
  margin-left: 25px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: ${props => props.size};
  height: 74px;

  ${media.mobile} {
    background-color: #262425;
    color: #8c8080;
    width: 80%;
    margin-bottom: 25px;
    margin-top: 20px;
    margin-left: 25px;
  }
`
