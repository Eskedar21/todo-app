import React, { useState } from 'react'

import Form from './Form'
import Task from './Task'
import Footer from './Footer'

function Todo() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.done).length;
  const remaningTasks = tasks.filter((task) => !task.done).length;
  const totalTasks = tasks.length;

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <div className='bg-white h-auto w-1/2 flex flex-col items-center justify-center rounded-2xl gap-4 p-6 shadow-lg'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-8 text-blue-500 drop-shadow-sm tracking-tight'>Todo App</h1>

        <Form tasks={tasks} setTasks={setTasks} />
        <Task tasks={tasks} setTasks= {setTasks} />
        <Footer completedTasks = {completedTasks}  remaningTasks= {remaningTasks}   totalTasks = {totalTasks}/>


      </div>

    </div>

  )
}


export default Todo