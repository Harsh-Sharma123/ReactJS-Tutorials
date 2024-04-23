import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function App() {

  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');
  useEffect(()=>{
    console.log("useEffect called")
    fetch('https://jsonplaceholder.typicode.com/todos/').then((result)=>{
      result.json().then((res)=>{
        console.log(res);
        setData(res.slice(0, 10));
      })
    })
  }, [])

  function handleChange(){
    console.log("change handle");
  }

  function handlePreFill(id){
    console.log(id);
    setId(id);
    setTitle(data[id-1].title);
    setCompleted(data[id-1].completed);
  }
  return (
    <div className="App">
      <Table striped hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>(
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? 'True' : 'False'}</td>
              <td><button onClick={()=>handlePreFill(item.id)}>PreFill Form</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Form Details based on Selected Data</h2>
      {/* <form> */}
        ID: <input type="text" value={id} onChange={handleChange}/><br />
        TITLE: <input type="text" value={title} onChange={handleChange}/><br />
        COMPLETED: <input type="text" value={completed} onChange={handleChange} />
      {/* </form> */}
    </div>
  );
}

export default App;
