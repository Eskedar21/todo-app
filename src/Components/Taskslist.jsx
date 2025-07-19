import { MdClose } from "react-icons/md"

function Taskslist({ item }) {
  const handleDelete = (id) => {
     
  }
  return (
    <div className="w-lg  px-4 py-2 text-gray-700 border-2 border-gray-200 rounded-lg mb-4 flex items-center justify-between">
      <h2> {item}</h2>
      <button onClick={() => handleDelete(id)} className="text-blue-500 hover:text-blue-600 transition-all">
        <MdClose size={24} />
      </button>
    </div>

  )
}

export default Taskslist