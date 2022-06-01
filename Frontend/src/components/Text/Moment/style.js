import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleMoment = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #777777;
  padding-right: 30px;
  margin-top: 23px;
  margin-bottom: 18px;

  ${media.mobile} {
    font-size: 14px;
  }
`
