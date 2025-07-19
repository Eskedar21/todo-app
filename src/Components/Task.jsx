import Taskslist from "./Taskslist"

function Task({ tasks, setTasks }) {
    const sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return (
        <div>
            {sortedTasks.map((item) => {
                const originalIndex = tasks.indexOf(item);
                return (
                    <Taskslist
                        key={originalIndex}
                        item={item}
                        id={originalIndex}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                );
            })}
        </div>
    )
}

export default Task