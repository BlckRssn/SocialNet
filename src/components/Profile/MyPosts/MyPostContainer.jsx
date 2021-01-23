import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../Redux/state';
import MyPosts from './MyPost';
import StoreContex from '../../../StoreContex';
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewPostText: (text) =>{
      let action = (updateNewPostTextActionCreater(text));
      dispatch(action);
    },
    addPost: () =>{
      dispatch(addPostActionCreater());
    }   
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);  

export default MyPostsContainer;