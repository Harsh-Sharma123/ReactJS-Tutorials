import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [item, Itemi] = useState(10);

  // function countCheck(){
  //   console.log("Count Check Console!");
  //   return count*2;
  // }

  const checkCountMemo = useMemo(()=>{
    console.log("Count From UseMemo");
    return count*2;
  }, [count]);

  return (
    <div className="App">
      <h2>Use Memo Demo in ReactJS</h2>
      <h4>Count : {count}</h4>
      <h4>Item : {item}</h4>
      {/* <h4>Count from Function : {countCheck()}</h4> */}
      <h4>Count from Function UseMemo : {checkCountMemo}</h4>
      <button onClick={()=>setCount(count + 1)}>Update Count</button>
      <button onClick={()=>Itemi(item*10)}>Update Item</button>
    </div>
  );
}

export default App;
