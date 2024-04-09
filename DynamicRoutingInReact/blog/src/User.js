import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const {name} = params;
  return (
    <div>
      <h2>Hello User - {name}!</h2>
    </div>
  )
}

export default User
