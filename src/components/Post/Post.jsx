import React from 'react'
import "./Post.css";

const Post = ({ userId, id, title, body }) => {
    return (
        <div className='post'>
            <h2>{title}</h2>
            <div>id:{id}, userId: {userId}</div>
            <p>{body}.</p>
        </div>
    )
}

export default Post