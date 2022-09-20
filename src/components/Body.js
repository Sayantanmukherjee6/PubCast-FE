import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Post from './Post';


function Body() {
    const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && ( 
    <div>
        <Post/>
    </div>
  )
  )
}

export default Body