import styled from 'styled-components'
import media from '../../ui/media'

export const StyleMain = styled.div`
  align-items: center;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 85vh;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;

  .DivMain {
    align-items: center;
    border: 1px solid #777777;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .DivHeader {
    background-color: #0d0c0c;
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  ${media.mobile} {
    .DivMain {
      width: 80%;
    }

    .DivHeader {
      width: 100%;
    }
  }
`
