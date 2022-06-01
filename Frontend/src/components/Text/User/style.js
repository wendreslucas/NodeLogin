import styled from 'styled-components'
import media from '../../Ui/Media'

export const StyleUser = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #777777;
  padding-left: 30px;
  margin-top: 23px;
  margin-bottom: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #7777;
  }

  ${media.mobile} {
    font-size: 14px;
  }
`
export const StyleAncor = styled.a`
  text-decoration: none;
  cursor: pointer;
`
