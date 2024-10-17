// src/components/pages/EditPost/EditPost.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import PostForm from '../../features/PostForm';
import { getPostById, editPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!post) return <Navigate to="/" />;

  const handleSubmit = (updatedPost) => {
    dispatch(editPost({ ...updatedPost, id: post.id }));
    navigate('/');
  };

  return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post" 
      title={post.title} 
      author={post.author} 
      publishedDate={post.publishedDate} 
      shortDescription={post.shortDescription} 
      content={post.content} 
    />
  );
};

export default EditPostForm;