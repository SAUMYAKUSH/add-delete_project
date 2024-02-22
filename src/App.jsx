import React, { useState } from 'react'
import AddList from './Components/AddList';
import ListTodo from './Components/ListTodo';

function App() {
    const [Todo, setTodo] = useState([])
    const [list, setList] = useState([])
   
    const newTodo =(NewTodo)=>{
     const list = [...Todo];
     list.push(NewTodo);
     setTodo(list)

    }
    
  return (
    <>
      <AddList Todo={Todo} setTodo={setTodo} newTodo={newTodo} />
      <ListTodo Todo={Todo} setTodo={setTodo} setList={setList} />

    </>
  )
}

export default App;