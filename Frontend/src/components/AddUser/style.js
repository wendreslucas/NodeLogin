import styled from 'styled-components'
import media from '../../ui/media'

export const StyleFormCreate = styled.form`
  border: 1px solid #777777;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding-bottom: 10px;
  margin-bottom: 30px;
  width: 623px;

  ${media.mobile} {
    width: 80%;
  }
`
