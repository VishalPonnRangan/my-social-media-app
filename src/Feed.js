// Feed.js - React component for the Feed page

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API on component mount
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.example.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
