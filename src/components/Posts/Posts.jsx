import React from 'react'
import useAppContext from '../../customHooks/useAppContext'
import Post from '../Post/Post';

const Posts = () => {
    const { state: { posts, isFetching } } = useAppContext();

    return (
        <div>
            {isFetching ? <p>....cargando</p> : <ul>
                {
                    posts?.map(post => <Post key={post.id} {...post} />)
                }
            </ul>}
        </div>
    )
}

export default Posts