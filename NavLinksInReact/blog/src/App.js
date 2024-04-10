import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavLink to="/" style={({isActive})=>{return {background: isActive?'red': ''}}}>Home</NavLink><br />
       <NavLink to="/about" style={({isActive})=>{return{backgroundColor: isActive?'red':''}}}>About Us</NavLink><br />
       <NavLink to="/contact" style={({isActive})=>{return{backgroundColor: isActive?'red':''}}}>Contact Us</NavLink><br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
