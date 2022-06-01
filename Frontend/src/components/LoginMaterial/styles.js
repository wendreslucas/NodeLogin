import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`
export const StyleForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 500px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
`
export const DivBtn = styled.div`
  height: 260px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const DivSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .btn {
    font-size: 12px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    border: none;
    background: transparent;
    color: #36a9e0;

    /* visibility: ${props => (props.disabled ? 'hidden' : 'visible')}; */

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`
