import { useContext, useState } from "react"
import { TodoContext } from "../App"
import { toast } from "react-toastify";

const Field = () => {
  const {TodosList,setTodosList} = useContext(TodoContext);
  const [Todo,setTodo] = useState({
    id:0,
    name:'',
    completed:false
  })
  const handleChange = (e) =>{
    setTodo(prev => ({...prev,name:e.target.value}))
  }
  const submit = () =>{
    let length = TodosList.length;
    let id = length === 0 ? 1 : TodosList[length-1].id+1
    let item = TodosList.filter((todo)=>todo.name===Todo.name)
    if(item.length>0){
      toast.error('Task Already Exists')
      setTodo({
        id:0,
        name:'',
        completed:false
      })
      return
    }
    setTodosList(prev=>(
      [...prev,{...Todo,id:id}]
      ))
      toast.success('Task Added')
    setTodo({
      id:0,
      name:'',
      completed:false
    })
  }
  return (
    <div className="p-2 md:px-4 m-2 bg-zinc-50 shadow md:m-4 flex items-center justify-between border border-solid rounded text-slate-800 font-sans">
      <input type="text" onChange={handleChange} value={Todo.name} className="outline-none bg-transparent md:text-xl w-full placeholder:text-black" placeholder="Enter the Task"/>
      <button onClick={submit} className=" border border-solid border-white bg-opacity-90 px-2 py-1 rounded bg-blue-700 text-white ">Add</button>
    </div>
  )
}

export default Field