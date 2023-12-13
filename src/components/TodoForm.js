import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {

    //props.edit ? props.edit.value :  is used to retain the previous value for editing
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    //This function is used to pick and set the value to the input field
    const handleChange = e => {
        setInput(e.target.value);
    }

    //This function is used to handle the submit of the form 
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            //This is used to generate different id's for the app
            id: Math.floor(Math.random() * 10000),
            text: input
        })
            setInput(''); //This line is used to clear the input field after adding a todo.
    }


    return (
        //We include the handleSubmit function to the form
        <form className='Todo-form' onSubmit={handleSubmit}>
            
            {props.edit ? ( 
            <>
            <input 
            type='text' 
            placeholder='update item' 
            value={input} name='text' 
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-btn'>update Task</button>
            </>
            ) : 
            (
            <>
            <input 
            type='text' 
            placeholder='Add a todo' 
            value={input} name='text' 
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-btn'>Add Task</button>
            </>
            )}
        </form>
    )
}

export default TodoForm
