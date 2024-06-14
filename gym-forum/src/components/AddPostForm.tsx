// src/components/AddPostForm.tsx
import React, { useState } from 'react';
import { createPost } from '../services/apiService';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1); // Assuming user with ID 1 for now

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(title, body, userId);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
