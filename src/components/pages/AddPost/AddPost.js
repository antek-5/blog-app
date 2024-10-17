// src/components/pages/AddPost/AddPost.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../../features/PostForm';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  );
};

export default AddPostForm;
