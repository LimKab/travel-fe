import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserData from '../../../contexts/UserData';
import './Profile.css'; // Import CSS file for styling
import { loadStoredToken } from '../../../utils/utility';

function Profile() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { userdata } = useContext(UserData); // Get userdata from the context

  useEffect(() => {
    if (userdata) {
      setUserName(userdata.username);
      setEmail(userdata.email);
      setAge(userdata.age || '');
      setFamilyName(userdata.familyName || '');
      setPassword(userdata.password)
      setProfilePicture(userdata.profilePicture); // Assuming the profile picture URL is provided in userdata
    }
  }, [userdata]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFamilyNameChange = (e) => {
    setFamilyName(e.target.value);
  };

  const handleImageChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0])); // Display the selected image before uploading
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', userName);
    formData.append('email', email);
    formData.append('age', age);
    formData.append('familyName', familyName);
    formData.append('password', password)
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      const token = loadStoredToken()
      console.log('test: ', formData)
      const response = await axios.put(`http://localhost:3001/profile/${userdata._id}`, formData, {
        headers: {
          'content-type': 'application/json',
          'authorization': token
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="profile-card">
        <div className="profile-info">
          {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
          <h2 className="profile-name">{userName}</h2>
          <p className="profile-email">Email: {email}</p>
          <p className="profile-age">Age: {age}</p>
          <p className="profile-family-name">Family Name: {familyName}</p>
        </div>
      </div>
      <div className="edit-profile">
        <h2>Edit Profile for {userName}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input className='profile-input' type="text" id="userName" value={userName} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input className='profile-input' type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input className='profile-input' type="text" id='age' value={age} onChange={handleAgeChange} />
          </div>
          <div>
            <label htmlFor="familyName">Family Name:</label>
            <input className='profile-input' type="text" id='familyName' value={familyName} onChange={handleFamilyNameChange} />
          </div>
          <div>
            <label htmlFor="password">Change password:</label>
            <input className='profile-input' type="password" id='password' value={password} onChange={handleFamilyNameChange} />
          </div>
          <div>
            <label htmlFor="confirnPassword">Confirn password:</label>
            <input className='profile-input' type="password" id='confirmPassword' value={confirmPassword} onChange={handleFamilyNameChange} />
          </div>
          <div>
            <label>Upload Profile Picture:</label>
            <input className='profile-input' type="file" onChange={handleImageChange} />
          </div>
          <button type="submit">Save Changes</button>
        </form>
        {message && <div>{message}</div>}
      </div >
    </div >
  );
}

export default Profile;
