import {useEffect, useState} from "react";

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(null)

    useEffect(() => {
        setValue(!defaultValue);
    }, [defaultValue]);

    return value;
}

export {
    useToggle
}