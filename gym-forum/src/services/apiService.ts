// src/services/apiService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createUser = async (username: string) => {
  const response = await axios.post(`${API_URL}/users`, { user: { username } });
  return response.data;
};

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const createPost = async (title: string, body: string, userId: number) => {
  const response = await axios.post(`${API_URL}/posts`, { post: { title, body, user_id: userId } });
  return response.data;
};

export const createComment = async (postId: number, body: string, userId: number) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comments`, { comment: { body, user_id: userId, post_id: postId } });
  return response.data;
};
