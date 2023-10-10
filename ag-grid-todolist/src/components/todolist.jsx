import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Fragment, useState } from "react"
import TodoGrid from './todoGrid';



function TodoList() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });

    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = (e) => {
        if (todo.desc.trim() && todo.date && todo.priority) {
            e.preventDefault();
            setTodos([...todos, todo]);
            setTodo({ desc: '', date: '', priority: '' })
        }

        else {
            e.preventDefault();
            alert("Description, date and priority are required fields")

        }
    }

    const deleteByIndex = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }


    return (
        <Fragment>
            <form onSubmit={addTodo}>
                <fieldset>
                    <legend>Add todo</legend>
                    <label>Date:</label>
                    <input type="date"
                        name="date"
                        value={todo.date}
                        onChange={handleInput}
                        placeholder="Write here" />
                    <label>Description:</label>
                    <input type="text"
                        name="desc"
                        value={todo.desc}
                        onChange={handleInput} />
                    <label>Priority:</label>
                    <input type="text"
                        name="priority"
                        value={todo.priority}
                        onChange={handleInput} />
                    <input type="submit"
                        value="Add" />
                </fieldset>
            </form>

            <TodoGrid todos={todos} onDelete={deleteByIndex} />
        </Fragment >
    )
}

export default TodoList