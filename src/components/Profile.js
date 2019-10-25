import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://www.cheatsheet.com/wp-content/uploads/2019/05/robert-downey-jr-iron-man-1024x692.jpg"
        alt="man"
        name="Anufrii"
      />
      <Palette />
    </div>
  )
}

export default Profile;
