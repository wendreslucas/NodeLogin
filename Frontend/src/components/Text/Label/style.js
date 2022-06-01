import styled from 'styled-components'
import media from '../../../ui/media'

export const StyleLabel = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 8.75px;
  padding-left: 32px;
  padding-bottom: ${props => props.bottom};
  margin-bottom: ${props => props.margin};

  ${media.mobile} {
    font-size: 16px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`
