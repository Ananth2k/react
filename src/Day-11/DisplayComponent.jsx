import React from 'react'

function DisplayComponent({name}) {
  return (
    <div>
      <h2>Hello, {name || "guest"}!</h2>
    </div>
  )
}

export default DisplayComponent