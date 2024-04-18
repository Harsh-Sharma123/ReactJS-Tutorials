import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  function setDetails(){
    console.log(name, email, mobile);
    let data = {name, email, mobile};
    fetch('https://localhost:4000', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      console.log("result:",result)
    })
  }

  return (
    <div className="App">
      <h2>Enter New User : </h2>
      <input type="text" name="name" onChange={(e)=>setName(e.target.value)} /><br /><br />
      <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
      <input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} /><br /><br />
      <button onClick={setDetails}>Save New User</button>
    </div>
  );
}

export default App;
