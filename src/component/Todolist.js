import React, { useRef, useState } from 'react';
import TodoTable from './TodoTable';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from "@material-ui/icons/Delete"




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
    // antd method
    const handleDateChange = (date, dateString) => {
        setTodo({ ...todo, date: dateString })
    }

    return (
        <div>

            <TextField label="Description" name="desc" onChange={inputChanged} value={todo.desc} />
            <DatePicker
                label="Date"
                type="date"
                selected={todo.date}
                onChange={(date, dateString) => handleDateChange(date, dateString)} />
            <TextField label="Priority" name="priority" onChange={inputChanged} value={todo.priority} />
            <Button onClick={addItem} variant="contained" color="primary" startIcon={<SaveIcon />}>Add</Button>
            <Button onClick={deleteTodo} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
            <TodoTable todos={todos} gridRef={gridRef} />
        </div>
    )
}

export default Todolist;