import {useEffect, useState} from "react";

const useArray = (defaultValue) => {

    const [array, setArray] = useState(null)

    useEffect(() => {
        setArray(defaultValue);
    }, [defaultValue]);

    const add = (item) => {
        setArray(prev => [...prev, item]);
    }
    const remove = (id) => {
        setArray(prev => prev.filter((item) => item.id !== id));
    }

    return {
        array,
        add,
        remove
    };
};

export {
    useArray
};