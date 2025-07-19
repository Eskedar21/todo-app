import { MdCheckBox, MdCheckBoxOutlineBlank, MdClose } from "react-icons/md"

function Taskslist({ item, id, tasks, setTasks }) {
  const handleDelete = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  }

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task, index) => index === id ? { ...task, done: !task.done } : task
    ))
  }
  return (
    <div className="w-lg  px-4 py-2 text-gray-700 border-2 border-gray-200 rounded-lg mb-4 flex items-center justify-between">
      <span
        className="cursor-pointer flex items-center "
        onClick={() => handleToggleComplete(id)}>
        {item.done ? (
          <MdCheckBox size={24} className="text-blue-500" />
        ) : (
          <MdCheckBoxOutlineBlank size={24} className="text-gray-400" />
        )}
        <h2 className={`ml-2 ${item.done ? "line-through text-gray-400" : ""}`}>
          {item.name}
        </h2>

      </span>
      <button onClick={() => handleDelete(id)} className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer">
        <MdClose size={24} />
      </button>
    </div>

  )
}

export default Taskslist