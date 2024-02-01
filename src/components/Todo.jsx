import PropTypes from 'prop-types'
import { HiCheck } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Todo = ({TodoItem,DeleteTodo,Finish}) => {
  return (
    <div className="mt-2 p-2 px-4 flex flex-row justify-between border border-solid border-zinc-300 rounded shadow mb-2">
        <div className={TodoItem.completed?'text-green-400':''}>{TodoItem.name}</div>
        <div className="flex gap-2 items-center text-sm md:text-lg">
        <button onClick={()=>DeleteTodo(TodoItem.id)} className="text-xl md:text-2xl px-2 rounded"><RxCross2 /></button>
        {
          TodoItem.completed !==true && <button onClick={()=>Finish(TodoItem.id)} className="text-xl md:text-2xl px-2 rounded"><HiCheck /></button>
        }
        </div>
    </div>
  )
}
Todo.propTypes = {
  TodoItem:PropTypes.object,
  DeleteTodo:PropTypes.func,
  Finish:PropTypes.func
}

export default Todo