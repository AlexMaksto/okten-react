import {AppTestUseCallback} from "../../components/task2/AppTestUseCallback/AppTestUseCallback";
import {tasks} from "../../constans/tasks";

const Task2Page = () => {
    return (
        <div>
            <p>{tasks.task2}</p>
            <p>({tasks.task1})</p>
            <AppTestUseCallback/>
        </div>
    );
};

export {
    Task2Page
};