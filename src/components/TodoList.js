import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([])

    //The function to add a To-do
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    //Function to edit to-do
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(previous => previous.map(item =>(item.id === todoId ? newValue : item)))
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

            setTodos(updatedTodos);
    }

  return (
    <div>
      <h1>Today's Planned Schedule</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList
