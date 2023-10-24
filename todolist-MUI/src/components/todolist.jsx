import { Fragment, useState } from "react";
import TodoGrid from "./todoGrid";
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function TodoList() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ desc: '', priority: '' });
    const [date, setDate] = useState(null);

    // to show todays date as a placeholder for datepicker
    const today = new Date();
    const label = today.toLocaleDateString("fi-FI");

    const handleInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    }

    const addTodo = (e) => {
        if (todo.desc.trim() && date && todo.priority) {
            e.preventDefault();
            setTodos([...todos, todo]);
            setTodo({ desc: '', priority: '' });

        } else {
            e.preventDefault();
            alert('Description, date and priority are required fields');
        }
    }

    const deleteByIndex = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    const handleDate = (newDate) => {
        setTodo({ ...todo, date: newDate.format('DD.MM.YYYY') });
        setDate(newDate);
    }


    return (
        <Fragment>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                    <DatePicker
                        label={` Date today ${label}`}
                        format='DD.MM.YYYY'
                        value={date}
                        onChange={handleDate} />

                    <TextField style={{ width: '150px' }}
                        label='Description'
                        variant='standard'
                        name='desc'
                        value={todo.desc}
                        onChange={handleInput} />

                    <FormControl variant='standard' style={{ width: '150px' }}>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            name="priority"
                            value={todo.priority}
                            onChange={handleInput} >

                            <MenuItem value='Low'>Low</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='High'>High</MenuItem>
                        </Select>
                    </FormControl>

                    {/* <TextField
                        label='Priority'
                        variant='standard'
                        name='priority'
                        value={todo.priority}
                        onChange={handleInput} /> */}

                    <Button
                        variant='contained'
                        size='small'
                        onClick={addTodo}>
                        Add
                    </Button>
                </Stack>
            </LocalizationProvider>
            <TodoGrid todos={todos} onDelete={deleteByIndex} />
        </Fragment>
    )
}

export default TodoList