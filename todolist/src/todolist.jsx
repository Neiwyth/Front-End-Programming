import { Fragment, useState } from "react"

function Todolist() { // component

    //state
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ desc: "", date: "" });


    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    //add if desc and date are filled
    const addTodo = (e) => {
        if (todo.desc && todo.date) {
            e.preventDefault();
            setTodos([...todos, todo]);
        }
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, i) => i !== row));

    }

    const itemRows = todos.map((todo, i) =>
        <tr key={i}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
            <td><button onClick={() => deleteTodo(i)}>Delete</button></td>
        </tr>

    );

    return (
        <Fragment>
            <h1>Todo list</h1>
            <label>Description:
                <input
                    type="text"
                    name="desc"
                    value={todo.desc}
                    onChange={handleInput}
                    placeholder="Description"
                />
            </label>
            <label>Date:
                <input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={handleInput}
                />
            </label>

            <button onClick={addTodo} >Add</button>

            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Todolist