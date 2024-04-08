import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/*" element={<h2>404 Not Found!</h2>} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
