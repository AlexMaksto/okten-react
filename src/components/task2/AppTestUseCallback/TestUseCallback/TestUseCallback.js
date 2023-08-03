import {memo, useMemo, useState} from "react";

const TestUseMemo = ({data}) => {
    const [count, setCount] = useState(0)

    useMemo(() => {
        for (let i = 0; i < 500000000; i++) {
            data++
        }
        setCount(data)
    }, [data]);

    return (
        <div>
            <div>Count: {count}</div>
        </div>
    );
};

export default memo(TestUseMemo);