import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userId = 1; // Replace with dynamic user ID
    axios.get(`http://localhost:5000/profile/${userId}`)
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{profile.username}'s Profile</h1>
      <p>Email: {profile.email}</p>
      {/* Add more profile details here */}
    </div>
  );
}

export default Profile;
