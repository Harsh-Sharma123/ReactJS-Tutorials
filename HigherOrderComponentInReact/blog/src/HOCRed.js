import React from 'react'

const HOCRed = (props) => {
  return (
    <div style={{backgroundColor: 'red'}}>
      <props.comp />
    </div>
  )
}

export default HOCRed;
