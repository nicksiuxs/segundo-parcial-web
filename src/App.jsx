import React, { useEffect } from 'react'
import Posts from './components/Posts/Posts';
import useAppContext from './customHooks/useAppContext';
import getPosts from './utils/fetchPosts';
import TYPES from './reducers/types';

const App = () => {
  const { dispatch } = useAppContext();

  const handleGetPosts = async () => {
    dispatch({ type: TYPES.FETCHING });
    const posts = await getPosts()
    dispatch({ type: TYPES.ADD_DATA, payload: posts });
  }

  useEffect(() => {
    handleGetPosts()
  }, []);

  return (
    <div>
      <h1>Segundo Parcial</h1>
      <p className="description">Para este parcial, utilicé react context y el useReducer</p>
      <Posts />
    </div>
  )
}


export default App;