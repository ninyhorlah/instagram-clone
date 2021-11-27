// import { Avatar } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar'

const Post = ({username, caption, imageUrl}) => {
    return (
        <div className='post'>
            <div className="post__head">
            <Avatar>{username?.charAt(0).toUpperCase()}</Avatar>
            <h4>{username}</h4>
            </div>

           <div className="post__content">
                <img src={imageUrl} alt="" className='post__img' />

                <p className='post__caption'><strong>{username}</strong> {caption}</p>
           </div>

        </div>
    )
}

export default Post
