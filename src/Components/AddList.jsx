import React, { useState } from 'react'

function AddList({Todo, setTodo,newTodo,setList}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const addNameHandler = ()=>{
    const list ={
        id: Math.random(),
        Name: name,
        Amount: price
    }
    newTodo(list)
    setName("")
    setPrice("")
    setList(list)

    }
  return (
    
    <div>
    <input type='text' onChange={(e)=>nameHandler(e)} value={name} placeholder='Name' />
    <input type='number' onChange={(e)=>priceHandler(e)} value={price} placeholder='Price' />
    <button type='click' onClick={addNameHandler}>Add</button>
    </div>
  )
}

export default AddList