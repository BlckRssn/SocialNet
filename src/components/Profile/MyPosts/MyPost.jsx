import React from 'react';
import s from './MyPosts.module.css'
import Posst from './Posst/Posst';


const MyPosts = (props) => {
  let postsElement = 
    props.postData.map(post => <Posst message={post.message} likeCount={post.likeCount} /> );

  let newPostElement = React.createRef();

  let onAddPost = () =>{
    props.addPost();
  }

  let onPostChange=() =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost} >Add button </button>
        </div>
      </div>
      <div className={s.posts}>
       {postsElement}
      </div>
    </div>
  )

};

export default MyPosts;