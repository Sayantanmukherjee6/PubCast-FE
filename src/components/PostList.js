import React, { useEffect, useState, useRef } from 'react'
import Token from './Token';

function PostList() {
    const [token, user, isAuthenticated]= Token();
    const [allPost, setallPost] = useState([]);
    const [somePost, setsomePost] = useState([]);
    const maxPost= 4;
    var allPostLength = 0
    let arrayForHoldingPosts = []
    const ref = useRef(maxPost)

    useEffect(() => {
        if (token != null) {
            const eventSource = new EventSource("http://localhost:8080/post/fetch", {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            eventSource.onmessage = result => {
                if (JSON.parse(result.data).length > allPostLength) {
                    allPostLength= JSON.parse(result.data).length
                    setallPost(...[JSON.parse(result.data)])
                }                

            };

            eventSource.onerror = err => {
                console.log('EventSource error: ', err);
            };
        }
    },[token])

    const loopWithSlice = (start, end) => {
        const slicedPosts = allPost.slice(start, end)
        arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
        setsomePost(arrayForHoldingPosts)
      }

    useEffect(() => {
        loopWithSlice(0, maxPost)
    },[allPost])

    const handleShowMorePosts = () => {
        loopWithSlice(ref.current, ref.current + maxPost)
        ref.current += maxPost
      }

    const DisplayData = () => (
        somePost.map((eachPost) => (
            <div>
                <tr>
                <th><h4>{eachPost.email}</h4></th>
            </tr><tr>
                    <td>{eachPost.post}</td>
                    <td>{eachPost.createdDate.replace('T', ' ').split('.')[0]}</td>
                </tr>
                </div>
        ))
    )

  return (
    <div>
        {DisplayData()}
        <button onClick={handleShowMorePosts}>Load previous</button>
    </div>
  )
}

export default PostList