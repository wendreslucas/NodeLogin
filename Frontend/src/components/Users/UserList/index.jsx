import React from 'react'
import { useAxios } from '../../../hooks/useAxios'
import Post from '../Post'
import { DivMap } from './style'

function PostList() {
  const { data } = useAxios('posts')

  return (
    <DivMap>
      {data?.posts?.map(post => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          content={post.content}
          username={post.userName}
          created_datetime={post.created_datetime}
        />
      ))}
    </DivMap>
  )
}

export default PostList
