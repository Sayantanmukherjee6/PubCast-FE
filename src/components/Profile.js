import React, {useEffect} from 'react';
import Token from './Token';

const Profile = () => {
  const [token, user, isAuthenticated]= Token();

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
       <h3>{user.nickname}</h3>
      </div>
    )
  )
}

export default Profile