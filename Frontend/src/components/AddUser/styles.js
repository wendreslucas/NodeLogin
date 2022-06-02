import styled from 'styled-components'

export const Overlay = styled.div`
  background: black;
  box-shadow: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const Container = styled.div`
  background: #fefefe;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`
export const DivHeader = styled.div`
  display: grid;
  grid-template-columns: 25fr 0.2fr;

  .btn {
    font-size: 15px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    border: none;
    background: transparent;
    margin-top: -40px;
    color: #36a9e0;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`

export const StyleForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 500px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
`
export const DivBtn = styled.div`
  height: 100%;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const DivInputs = styled.div`
  width: 270px;
`

export const DivSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40px;

  a {
    color: #8c8080;
    font-size: 12px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.2;
    }
  }
`
