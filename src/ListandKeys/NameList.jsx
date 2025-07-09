import React from 'react'
import ListItems from './ListItems';

function NameList() {

const names = ["Naruto", "Sasuke", "Sakura"];


  return (
      <div>
      <h1>Lists and Keys</h1>
      <ul>
        {names.map((name,index)=>(
       <ListItems key={index} name={name} index={index}/>
        ))}


 
      </ul>
      
      </div>
  )
}

export default NameList