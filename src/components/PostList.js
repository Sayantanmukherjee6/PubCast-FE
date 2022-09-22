import React, { useEffect, useState } from 'react'
import Token from './Token';

function PostList() {
    const [token, user, isAuthenticated]= Token();
    const [allPost, setallPost] = useState([]);

    useEffect(() => {
        if (token != null) {
            const eventSource = new EventSource("http://localhost:8080/post/fetch", {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            eventSource.onmessage = result => {
                setallPost(...[JSON.parse(result.data)])

            };
            eventSource.onerror = err => {
                console.log('EventSource error: ', err);
            };
        }
    },[token])

  return (
    <div>
        {allPost.map((eachPost) => (
            <><tr>
                <th><h4>{eachPost.email}</h4></th>
            </tr><tr>
                    <td>{eachPost.post}</td>
                    <td>{eachPost.createdDate.replace('T', ' ').split('.')[0]}</td>
                </tr></>
        ))}
    </div>
  )
}

export default PostList