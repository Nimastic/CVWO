// src/components/PostList.tsx
import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/apiService';
import cable from '../services/cableService';
import { PostData } from '../types';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); // Fetch posts initially

    const subscription = cable.subscriptions.create('PostsChannel', {
      received(data: PostData) {
        setPosts((prevPosts) => [data.post, ...prevPosts]); // Prepend new post
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>By User {post.user_id}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
