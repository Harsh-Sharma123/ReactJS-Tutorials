import React from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('name'));
  return (
    <div>
      <h2>Hello User Page !</h2>
      <input type="text" onChange={(e)=>setSearchParams({text: e.target.value})} />
      <button onClick={()=>setSearchParams({age: 23})}>Click Me to update Params in URL</button>
    </div>
  )
}

export default User;
