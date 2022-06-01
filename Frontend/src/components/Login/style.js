import styled from 'styled-components'
import media from '../../ui/media'

export const Container = styled.div`
  align-items: center;
  background-color: #0d0c0c;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  ${media.mobile} {
    width: 100%;
  }
`
export const StyleForm = styled.form`
  background-color: #1e1e1e;
  border: 1px solid #777777;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 500px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${media.mobile} {
    width: 80%;
    height: 35vh;
    /* padding-bottom: 20px; */
  }

  a {
    color: #8c8080;
    font-size: 14px;
    font-weight: bold;
    margin-left: 410px;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.2;
    }
  }
`
