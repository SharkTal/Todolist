import React, { useState } from 'react';

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
            <table>
                <tbody>
                    <tr><th>Index</th><th>Desc</th><th>Date</th></tr>
                    {
                        todos.map((todo, index) =>

                            <tr key={index}>
                                <td>{index}</td>
                                <td>{todo.desc}</td>
                                <td>{todo.date}</td>
                                <td><button onClick={e =>deleteMe(index)}>X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>





        </div>
    )
}

export default Todolist;