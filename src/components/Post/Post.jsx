import React from 'react'

const Post = ({ userId, id, title, body }) => {
    return (
        <div>
            <span>id:{id}, userId: {userId}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Post