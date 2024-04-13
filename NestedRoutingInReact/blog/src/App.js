import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Company from './Company';
import Employee from './Employee';
import Policy from './Policy';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive ? 'red' : ''}}}>Home</NavLink><br />
        <NavLink to="/contact" style={({isActive})=>{return {backgroundColor: isActive ? 'red' : ''}}}>Contact</NavLink><br />
        <NavLink to="/policy" style={({isActive})=>{return {backgroundColor: isActive ? 'red' : ''}}}>Policy</NavLink>< br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy/" element={<Policy />}>
            <Route path="company" element={<Company />} />
            <Route path="employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
