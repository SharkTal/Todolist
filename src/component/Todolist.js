import React, { useRef, useState } from 'react';
import TodoTable from './TodoTable';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Todolist = () => {
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const addItem = () => {
        setTodos([todo, ...todos]);
        setTodo({ desc: '', priority: '' });
    }

    const deleteMe = (index) => {
        const filteredArray = todos.filter((todo, i) => i !== index)
        setTodos(filteredArray)
    }

    const gridRef = useRef();
    const deleteTodo = () => {
        setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
    }

    const handleDateChange = (date, dateString) => {
        setTodo({ ...todo, date: dateString })
    }

    return (
        <div>
            
            <TextField name="desc" onChange={inputChanged} value={todo.desc} />
            <DatePicker
                label="Date"
                type="date"
                selected={todo.date}
                onChange={(date, dateString) => handleDateChange(date, dateString)} />
            Priority: <input type="text" onChange={inputChanged} value={todo.priority} name="priority" />
            <button onClick={addItem}>Add Todo</button>
            <button onClick={deleteTodo}>Delete</button>

            <TodoTable todos={todos} gridRef={gridRef} />

            

        </div>
    )
}

export default Todolist;