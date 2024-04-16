import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/').then((result) => {
      result.json().then((res) => {
        console.log(res);
        setData(res);
        console.log(data)
      })
    })
  }, [])

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Title
            </th>
            <th>
              Completed
            </th>
          </tr>
        </thead>
        <tbody>

          {
            data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? 'True' : 'False'}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
