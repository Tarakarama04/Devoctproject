import React from 'react';
    import { NavLink } from 'react-router-dom';
    import './Homepage.css';

function Homepage() {
  return (   
        <div>
          <nav className='navbar'>
            <img src='DEVOCT 4 1.png' alt='logo'/>
            <NavLink to='/'><h3 className='txt'>Home</h3></NavLink> 
            <NavLink to='/Projects'><h3 className='txt'>Projects</h3></NavLink> 
            <NavLink to='/Blog'><h3 className='txt'>Blog</h3></NavLink> 
            <NavLink to='/Roadmaps'><h3 className='txt'>Roadmaps</h3></NavLink> 
            <NavLink to='/Contact Us'><h3 className='txt'>Contact Us</h3></NavLink> 
            <button className='btn'>LOGIN</button>
          </nav>
        </div>
        
      )
}

export default Homepage