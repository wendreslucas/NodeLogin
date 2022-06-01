import styled from 'styled-components'
import media from '../../../ui/media'

export const StyleHeader = styled.div`
  align-items: center;
  /* background-color: #0d0c0c; */
  border-radius: 4px;
  color: white;
  display: flex;
  font-size: 22px;
  font-weight: 700;
  height: 50px;
  justify-content: start;
  margin-bottom: ${props => props.margin};
  padding-left: 37px;
  transition: all 0.3s ease-in-out;
  width: ${props => props.size};

  ${media.mobile} {
    font-size: 16px;
    padding-left: 27px;
    width: 100%;
  }
`
