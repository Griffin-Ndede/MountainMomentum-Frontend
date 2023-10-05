import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  const navigate = useNavigate();

  const handleViewHikesClick = () => {
    navigate('/packages');
  };

  return (
    <div className="home-container">
      <h1> Mountain Momentum</h1>
      <p>The mountains are calling and You have to go...</p>
      <div>
        <button className='homebutton1' onClick={handleViewHikesClick}>View hikes</button>
        <button className='homebutton2'>How it works</button>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
