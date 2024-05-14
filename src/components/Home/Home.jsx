import React from 'react';
import './Home.css';
import HomeLogo from '../assets/HomePage1.png'
import HomeText from '../assets/Welcome.png'
import Sidebar from '../Sidebar/Sidebar';
import HorizontalNavbar from '../Navbar/HorizontalNavbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <>
      <HorizontalNavbar />
      <div className='container'>
      <Sidebar />
      
      <div className='intro'>
        <img src={HomeLogo} alt="home-logo"/>
        <img src={HomeText} alt="home-text"/>
      </div>
      <div className='button-2' onClick={logout}>Log Out</div>
      </div>

    </>
  )
}

export default Home
