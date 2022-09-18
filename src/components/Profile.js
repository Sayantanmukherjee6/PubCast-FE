import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const {getAccessTokenSilently}= useAuth0();
  const [token, settoken] = useState(null);

  useEffect(() => {
    (async() => {
      const aToken = await getAccessTokenSilently();
      settoken(aToken)
    })();
  },[])

  useEffect(() => {
    if (token != null) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: "Bearer " + token },
        body: JSON.stringify({ name: user.name, userName: user.nickname, email: user.email})
      };
      console.log("Adding User")
      fetch('http://localhost:8080/user/add', requestOptions)
        .then(response => console.log(response))
        .catch(error => console.error(error))
      console.log("added user")
    }

  },[token])

  return (
    isAuthenticated && ( 
     <div>
       <h1>{user.nickname}</h1>
      </div>
    )
  )
}

export default Profile