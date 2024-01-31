import TodoList from "./components/TodoList"
import Field from "./components/Field"
import { createContext, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const TodoContext = createContext()
const App = () => {
  const [TodosList,setTodosList] = useState([]);
  const value = {TodosList,setTodosList}
  return (
    <>
    <ToastContainer autoClose={1000} hideProgressBar={true} newestOnTop={true} transition={Slide} closeOnClick
/>
    <TodoContext.Provider value={value}>          
      <Field/>
      <TodoList/>
    </TodoContext.Provider>
    </>
  )
}
export {TodoContext}
export default App