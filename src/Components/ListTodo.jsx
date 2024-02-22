import React from 'react';


function ListTodo({Todo,setTodo}) {

  const deletHandler=(id)=>{
    const newList = [...Todo]
    const filteredList = newList.filter(todo => todo.id!==id)
    setTodo(filteredList)
  }
    let total = Todo.reduce((sum,current)=>
      sum + Number(current.Amount), 0
    );

  return (
    <div>
     {
      Todo.map((k) =>(
        <div key={k.id}>
         {k.Name}{k.Amount} 
         <button onClick={() => deletHandler(k.id)}> Delete</button>
          </div>
      ))
     }
     <p>{total}</p>
       </div>
  )
}

export default ListTodo