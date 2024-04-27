import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function App() {

  const [data, setData] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/').then((result)=>{
      result.json().then((res)=>{
        setData(res.slice(0, 10));
      })
    })
  }, []);

  const handleClick = (id) => {
    console.log(id);
    setId(id);
    setTitle(data[id-1].title);
    setIsCompleted(data[id-1].isCompleted);
  };


  function handleUpdate(){
    let item = {id, title, isCompleted};
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'applicatoin/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((result)=>{
      result.json().then((res)=>{
        setData(res.slice(0, 10));
      })
    })
  }

  return (
    <div className="App">
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.isCompleted ? 'True' : 'False'}</td>
                <td><button onClick={()=>handleClick(item.id)}>Update Field</button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      <form >
        <label>Id : <input type="text" value={id} ></input></label>
        <label>Title : <input type="text" value={title} ></input></label>
        <label>isCompleted : <input type="text" value={isCompleted ? 'True' : 'False'} ></input></label>
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default App;
