import {TestUseMemo} from "./TestUseMemo/TestUseMemo";
import {useState} from "react";

const AppTestUseMemo = () => {
    const [data, setData] = useState(0);
    const [notData, setNotData] = useState(0);
    const handleClick = (type, fun) => {
        switch (fun) {
            case 'data':
                setData(type === 'plus' ? data + 1 : data - 1);
                break;
            case 'notData':
                setNotData(type === 'plus' ? notData + 1 : notData - 1);
                break;
        }

    }

    return (
        <div>
            <div>Data: {data}</div>
            <button onClick={() => handleClick('minus', 'data')}>Minus data</button>
            <button onClick={() => handleClick('plus', 'data')}>Plus data</button>
            <TestUseMemo data={data}/>
            <br/>
            <div>NotData: {notData}</div>
            <button onClick={() => handleClick('minus', 'notData')}>Minus notData</button>
            <button onClick={() => handleClick('plus', 'notData')}>Plus notData</button>
        </div>
    );
};

export {
    AppTestUseMemo
};