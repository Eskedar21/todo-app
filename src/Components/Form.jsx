import { useState, } from "react"
import { MdAdd } from 'react-icons/md';


function Form({ tasks, setTasks }) {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, task])
        setTask('')
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <input
                type="text"
                onChange={(e) => setTask(e.target.value)}
                value={task} placeholder="Add a new task"
                className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 border-b-2 border-gray-200 w-md " />
            <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-2xl shadow-lg hover:bg-blue-600 transition-all ">
                <MdAdd size={24} />
            </button>
        </form>
    )
}

export default Form