import Taskslist from "./Taskslist"

function Task({tasks, setTasks}) {
    return (
        <div>
            {tasks.map((item, index) => (
                <Taskslist key={index} item={item} id={index} tasks= {tasks} setTasks = {setTasks} />
            ))}</div>
    )
}

export default Task