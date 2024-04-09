import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import User from './User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
