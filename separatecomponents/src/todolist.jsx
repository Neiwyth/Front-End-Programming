import { Fragment, useState } from "react"
import TodoTable from "./components/todoTable";


function TodoList() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ desc: '', date: '' });

    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = (e) => {
        if (todo.desc.trim() && todo.date) {
            e.preventDefault();
            setTodos([...todos, todo]);
            setTodo({ desc: "", date: "" })
        }

        else {
            e.preventDefault();
            alert("Description and date are required fields")

        }
    }

    const deleteTodo = (row) => {
        // setTodos(todos.filter((todo, i) => i !== row));
        setTodos(todos.filter((_, i) => i !== row));
    }


    return (
        <Fragment>
            <form onSubmit={addTodo}>
                <fieldset>
                    <legend>Add todo</legend>
                    <label>Description:</label>
                    <input type="text"
                        name="desc"
                        value={todo.desc}
                        onChange={handleInput}
                        placeholder="Write here" />
                    <label>Date:</label>
                    <input type="date"
                        name="date"
                        value={todo.date}
                        onChange={handleInput} />
                    <input type="submit"
                        value="Add" />
                </fieldset>
            </form>

            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </Fragment >
    )
}

export default TodoList