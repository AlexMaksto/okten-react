import {useState} from "react";

import {useToggle} from "../../hook/task3/useToggle";

const Task3 = () => {
    const [status, setStatus] = useState('');

    const changeStatus = useToggle(status);

    const handleStatus = (stat) => {
        setStatus(stat);
    }

    return (
        <div>
            <div>Status: {status+''}</div>
            <div>Change Status: {changeStatus+''}</div>
            <button onClick={() => handleStatus(true)}>True</button>
            <button onClick={() => handleStatus(false)}>False</button>
        </div>
    );
};

export {
    Task3
};