import React from 'react';


const TodoTable = (props) => {
    return (
        <table>
            <tbody>
                <tr><th>Index</th><th>Desc</th><th>Date</th></tr>
                {
                    props.todos.map((todo, index) =>

                        <tr key={index}>
                            <td>{index}</td>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={e => props.deleteMe(index)}>X</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
} 

export default TodoTable;