import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Token() {
    const {getAccessTokenSilently}= useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const [token, settoken] = useState(null);
  
    useEffect(() => {
      (async() => {
        const aToken = await getAccessTokenSilently();
        settoken(aToken)
      })();
    },[])

  return [
    token, user, isAuthenticated
  ]
}

export default Token