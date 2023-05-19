import React from 'react'

function Button() {
   const clickhandler = () => {
        alert('button clicked')
    }
  return (
    <button onClick={clickhandler}>Click me</button>
  )
}

export default Button