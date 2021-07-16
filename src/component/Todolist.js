import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import TodoTable from './TodoTable';

function Todolist() {
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = () => {
        //gridRef.current.getSelectedNodes()[0].childIndex;

        if (gridRef.current.getSelectedNodes().length > 0)
            setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
        else
            alert('Select row first!')
    }



    return (
        <div>
            <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
            <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
            <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>

            <TodoTable todos={todos} gridRef={gridRef} />
        </div>
    );
};

export default Todolist;
