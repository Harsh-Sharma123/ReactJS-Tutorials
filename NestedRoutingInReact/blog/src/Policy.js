import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Policy = () => {
  return (
    <div>
      <h2>Policy Page!</h2>
      <Link to="company" >Company</Link><br />
      <Link to="employee">Emlpoyee</Link>
      <Outlet />
    </div>
  )
}

export default Policy
