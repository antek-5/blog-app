// src/components/features/PostForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, title = '', author = '', publishedDate = '', shortDescription = '', content = '' }) => {
  const [formData, setFormData] = useState({
    title,
    author,
    publishedDate,
    shortDescription,
    content,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" value={formData.author} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formPublishedDate">
        <Form.Label>Published Date</Form.Label>
        <Form.Control type="date" name="publishedDate" value={formData.publishedDate} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formShortDescription">
        <Form.Label>Short Description</Form.Label>
        <Form.Control type="text" name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" name="content" value={formData.content} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
