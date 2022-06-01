import styled from 'styled-components'
import media from '../../../ui/media'

export const InputWrapper = styled.input`
  background-color: #262425;
  border-radius: 4px;
  border: 1px solid #777777;
  color: #8c8080;
  height: 28px;
  margin-left: 25px;
  margin-bottom: 19px;
  padding: 6px 0 6px 11px;
  width: ${props => props.size};

  ${media.mobile} {
    margin-bottom: 25px;
    margin-top: 20px;
    padding: 6px 0 6px 11px;
    width: 80%;
  }
`
