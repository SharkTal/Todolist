import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
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

    const columns = [
        { headerName: 'Description', field: 'description', sortable: true, filter: true, editable: true, floatingFilter: true },
        { headerName: 'Date', field: 'date', sortable: true, filter: true, editable: true, floatingFilter: true },
        {
            headerName: 'Priority', field: 'priority', sortable: true, filter: true, editable: true,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'green' }, floatingFilter: true
        }
    ]

    return (
        <div>
            <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
            <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
            <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>
            <div className="ag-theme-material" style={{ width: '50%', height: '700px', margin: 'auto' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={todos}
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    animateRows={true}
                />
            </div>

            <table>
                <tbody>
                    {
                        todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Todolist;