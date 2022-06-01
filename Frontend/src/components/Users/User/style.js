import styled from 'styled-components'
import media from '../../Ui/Media'

export const StylePosts = styled.div`
  border: 1px solid #777777;
  border-radius: 4px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 723px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ${media.mobile} {
    width: 80%;
  }

  .DivHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .BackImagem {
    align-items: center;
    background: #0d0c0c;
    display: flex;
    justify-content: space-evenly;
    width: 190px;
  }

  .Info {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const StyleModal = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const AncorUser = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const AncorAvatar = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const AvatarDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0 20px 20px 20px;
`
