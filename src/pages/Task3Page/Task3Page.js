import {tasks} from "../../constans/tasks";
import {Task3} from "../../components/task3/Task3";

const Task3Page = () => {
    return (
        <div>
            <p>{tasks.task3}</p>
            <Task3/>
        </div>
    );
};

export {
    Task3Page
};