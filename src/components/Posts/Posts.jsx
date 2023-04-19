import React, { useEffect } from 'react'
import useAppContext from '../../customHooks/useAppContext'
import Post from '../Post/Post';
import "./Posts.css";
import TYPES from '../../reducers/types';
import getPosts from '../../utils/fetchPosts';

const Posts = () => {
    const { state: { posts, isFetching }, dispatch } = useAppContext();

    const handleGetPosts = async () => {
        dispatch({ type: TYPES.FETCHING });
        const posts = await getPosts()
        dispatch({ type: TYPES.ADD_DATA, payload: posts });
    }

    useEffect(() => {
        handleGetPosts()
    }, []);

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