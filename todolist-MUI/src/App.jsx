import { Fragment, useState } from 'react'
import './App.css'
import { Tab, Tabs } from '@mui/material';
import TodoList from './components/todolist';
import Home from './components/home';

function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <Fragment>
      <div className='app-container'>
        <Tabs value={value} onChange={handleChange}>
          <Tab value='Home' label='Home' />
          <Tab value='List' label='Todolist' />
        </Tabs>
      </div>
      {value === 'Home' && <div className='content-container'><Home /></div>}
      {value === 'List' && <div><TodoList /></div>}
    </Fragment>
  )
}

export default App
