import React, { useState } from 'react';
import TodoTable from './TodoTable'

const Todolist = () => {
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const addItem = () => {
        setTodos([todo, ...todos]);
        setTodo({ desc: '', date: '' });
    }

    const deleteMe = (index) =>{
        const filteredArray= todos.filter((todo,i) => i !== index)
        setTodos(filteredArray)
    }

    return (
        <div>
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
            Date: <input type="text" onChange={inputChanged} value={todo.date} name="date" />
            <button onClick={addItem}>Add Todo</button>

            <TodoTable todos={todos} deleteMe={deleteMe}/>
        </div>
    )
}

export default Todolist;