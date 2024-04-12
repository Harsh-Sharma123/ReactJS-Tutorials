import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page!</h2>
      <button onClick={()=>navigate('/')}>Home Page</button><br />
      <button onClick={()=>navigate('/about')}>About Page</button>
    </div>
  )
}

export default Home;
