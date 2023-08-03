import {useCallback, useState} from "react";
import TestUseCallback from "./TestUseCallback/TestUseCallback";

const AppTestUseCallback = () => {
    const [data, setData] = useState(0);
    const [notData, setNotData] = useState(0);
    const handleClick = useCallback((type, fun) => {
        switch (fun) {
            case 'data':
                setData(type === 'plus' ? data + 1 : data - 1);
                break;
            case 'notData':
                setNotData(prev => type === 'plus' ? prev + 1 : prev - 1);
                break;
        }
    }, [data])

    return (
        <div>
            <div>Data: {data}</div>
            <button onClick={() => handleClick('minus', 'data')}>Minus data</button>
            <button onClick={() => handleClick('plus', 'data')}>Plus data</button>
            <TestUseCallback data={data}/>
            <br/>
            <div>NotData: {notData}</div>
            <button onClick={() => handleClick('minus', 'notData')}>Minus notData</button>
            <button onClick={() => handleClick('plus', 'notData')}>Plus notData</button>
        </div>
    );
};

export {
    AppTestUseCallback
};