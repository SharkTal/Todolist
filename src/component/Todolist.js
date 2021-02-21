import React, { useRef, useState } from 'react';
import TodoTable from './TodoTable';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Todolist = () => {
    const [todo, setTodo] = useState({ desc: '', date: new Date(),priority: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const addItem = () => {
        setTodos([todo, ...todos]);
        setTodo({ desc: '', priority: '' });
    }

    const deleteMe = (index) =>{
        const filteredArray= todos.filter((todo,i) => i !== index)
        setTodos(filteredArray)
    }

    const gridRef = useRef();
    const deleteTodo = () => {
        setTodos(todos.filter((todo, index) =>  index!==gridRef.current.getSelectedNodes()[0]. childIndex))
    }

    const handleDateChange = date => {
        setTodo({...todo, date: date})
    }
 

    return (
        <div>
            Desc: <input type="text" onChange={inputChanged} value={todo.desc} name="desc" />
            Date: <DatePicker
                    
                    dateFormat="yyyy/MM/dd"
                     selected={todo.date} 
                     onChange={date => handleDateChange(date)} />
            Priority: <input type="text" onChange={inputChanged} value={todo.priority} name="priority" />
            <button onClick={addItem}>Add Todo</button>
            <button onClick={deleteTodo}>Delete</button>

            <TodoTable todos={todos} gridRef={gridRef} />
          
        </div>
    )
}

export default Todolist;