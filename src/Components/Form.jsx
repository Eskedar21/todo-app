import { useState } from "react"
import { MdAdd } from 'react-icons/md';


function Form({ tasks, setTasks }) {
    const [task, setTask] = useState({ name: "", done: false })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.name.trim() === "") return; // Prevent empty tasks
        setTasks([...tasks, task])
        setTask({ name: "", done: false })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full max-w-lg mx-auto px-2"
        >
            <input
                type="text"
                onChange={(e) => setTask({ name: e.target.value, done: false })}
                value={task.name}
                placeholder="Add a new task"
                className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 border-b-2 border-gray-200 w-full sm:w-auto"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-2xl shadow-lg hover:bg-blue-600 transition-all flex-shrink-0 sm:text-auto sm:w-auto sm:px-6 sm:py-3 flex items-center justify-center"
            >
                <MdAdd size={24} />
            </button>
        </form>
    )
}

export default Form