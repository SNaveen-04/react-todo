import Todo from "./Todo"
import { TodoContext } from "../App"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

const NoResult = () =>{
  return(
    <div className="text-center text-lg md:text-xl font-medium text-black text-opacity-70 mt-2 p-2 rounded-md">
      No Results to Display
    </div>
  )
}

const TodoList = () => {
  const [filter,setFilter] = useState('All')
  const {TodosList,setTodosList} = useContext(TodoContext)
  const DeleteTodo = (id) =>{
    const newTodosList = TodosList.filter(todo=>todo.id!==id);
    setTodosList(newTodosList);
  }
  const Finish = (id) =>{
    const newTodosList = TodosList.map(todo=>{
      if(todo.id===id){
        return {...todo,completed:!todo.completed}
      }
      return todo
    })
    toast.success('Completed')
    setTodosList(newTodosList)
  }
  const [displayTodo,setDisplayTodo]=useState(TodosList)
  useEffect(()=>{
    switch(filter){
      case 'All':
        setDisplayTodo(TodosList)
        return
      case 'Pending':
        setDisplayTodo(TodosList.filter(todo=>todo.completed!==true))
        return
      case 'Completed':
        setDisplayTodo(TodosList.filter(todo=>todo.completed))
        return
      default:
        setDisplayTodo(TodosList)
        return
    } 
  },[TodosList,filter])

  return (
    <div className="m-2 md:m-4 p-2 rounded bg-zinc-50 md:p-4 border-solid border border-slate-200 shadow-lg">
        <div className="border-0 border-b border-solid border-slate-500 p-4 flex items-center justify-between">
            <button onClick={()=>setFilter('All')} className="p-1 px-3 bg-blue-600 text-white border border-solid rounded-md">All</button>
            <button onClick={()=>setFilter('Pending')} className="p-1 px-3 bg-red-500 text-white border border-solid rounded-md">Pending</button>
            <button onClick={()=>setFilter('Completed')} className="p-1 px-3 text-white border border-solid rounded-md bg-green-600">Completed</button>
        </div>
        <div>
            {displayTodo.length===0 ? <NoResult/> : displayTodo.map((TodoItem,index)=>{ return<Todo key={index} Finish={Finish} DeleteTodo={DeleteTodo} TodoItem={TodoItem}/>})}
        </div>
    </div>
  )
}

export default TodoList