import React from 'react'

function ListItems({name, index}) {

console.log("ListItems rendered", name);


  return (
<li key={index}>{index+1}.{name}</li>
  )
}

export default ListItems