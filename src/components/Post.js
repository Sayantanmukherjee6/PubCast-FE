import React, { useRef } from 'react'
import Token from './Token';

function Post() {
  const postRef = useRef(null);
  const [token, user, isAuthenticated]= Token();

  const addPost = () => {
    if (token != null && postRef.current && postRef.current.value) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: "Bearer " + token },
          body: JSON.stringify({ post: postRef.current.value, email: user.email})
        };
        console.log("Adding Post")
        fetch('http://localhost:8080/post/add', requestOptions)
          .then(response => console.log(response))
          .catch(error => console.error(error))
        console.log("added post")
      }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    postRef.current.value= null
  };
  
    return (
        <div className="createPostComponent">
          <form className="createPostComponent__form" onSubmit={onSubmit}>
            <input
              placeholder="type something.."
              className="createPostComponent__input"
              ref={postRef}
            />
            <button className="createPostComponent__button" type="submit" onClick={addPost}>
                Send
            </button>
          </form>
        </div>
      );
    };

export default Post