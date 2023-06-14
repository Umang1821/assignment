import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import styles from "./Navbar.css"

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar">
      <h1 className="text">
        Assignment
      </h1>
      {user?.displayName ? (
        <button className='button' onClick={handleSignOut}>Logout</button>
      ) : (
        <button className='button'><Link to='/signin'>Sign in</Link></button>
      )}
    </div>
  );
};

export default Navbar;