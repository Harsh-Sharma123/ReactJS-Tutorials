import React from 'react'

const HOCGreen = (props) => {
  return (
    <div style={{backgroundColor: 'green'}}>
      <props.comp />
    </div>
  )
}

export default HOCGreen;
