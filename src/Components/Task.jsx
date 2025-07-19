import Taskslist from "./Taskslist"

function Task({tasks}) {
    return (
        <div>
            {tasks.map((item, index) => (
                <Taskslist key={index} item={item} />
            ))}</div>
    )
}

export default Task