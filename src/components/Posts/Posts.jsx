import React from 'react'
import useAppContext from '../../customHooks/useAppContext'
import Post from '../Post/Post';
import "./Posts.css";

const Posts = () => {
    const { state: { posts, isFetching } } = useAppContext();

    return (
        <div className='posts'>
            {isFetching ? <p>....cargando</p> : <ul>
                {
                    posts?.map(post => <li key={post.id}><Post {...post} /></li>)
                }
            </ul>}
        </div>
    )
}

export default Posts