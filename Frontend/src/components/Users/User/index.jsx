import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import HeaderPost from '../../Headers/HeaderPost'
import { StylePosts, AncorUser, AncorAvatar, AvatarDiv } from './style.js'
import User from '../../Text/User'
import Moment from '../../Text/Moment'
import Text from '../../Text/TextContent'
import moment from 'moment'
import Delete from '../../Icons/Delete'
import Edit from '../../Icons/Edit'
import { useAxios } from '../../../hooks/useAxios'

import Avatar from '@mui/material/Avatar'

const pointer = {
  cursor: 'pointer',
  color: 'white'
}

function User({ name }) {
  const { userName } = useContext(UserContext)

  return (
    <StylePosts key={id}>
      <div className="DivHeader" key={id}>
        <div className="BackImagem"></div>
      </div>
      <div className="Info">
        <AvatarDiv>
          <AncorAvatar target="_blank" href={`https://github.com/${name}`}>
            <Avatar alt={name} src={`https://github.com/${name}.png`} />
          </AncorAvatar>
          <AncorUser target="_blank" href={`https://github.com/${name}`}>
            <User user={name} />
          </AncorUser>
        </AvatarDiv>
      </div>
      <Text text={content} />
    </StylePosts>
  )
}

export default User
