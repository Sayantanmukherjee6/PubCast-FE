import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Post from './Post';
import PostList from './PostList';


function Body() {
    const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && ( 
    <div>
        <Post/>
        <PostList />
    </div>
  )
  )
}

export default Body