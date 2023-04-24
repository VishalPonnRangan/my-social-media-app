// Profile.js - React component for the Profile page

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile from API based on userId prop
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.profileImage} alt={user.username} />
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
