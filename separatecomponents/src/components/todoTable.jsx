/* eslint-disable react/prop-types */
import { Fragment } from "react"

function TodoTable(props) {

    return (
        <Fragment>

            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map((todo, i) => (
                            <tr key={i}>
                                <td> {new Date(todo.date).toLocaleDateString("fi-FI")} </td>
                                <td> {todo.desc} </td>
                                <td><button onClick={() => props.deleteTodo(i)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default TodoTable