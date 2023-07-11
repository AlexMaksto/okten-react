import React, {useContext, useState} from 'react';
import {SmthDate} from "../App";

const SubChild2_2 = () => {

    const dat = useContext(SmthDate);

    const [date, setDate] = useState(dat);
    setDate('Today perfect day');

    return (
        <div>
        </div>
    );
};

export default SubChild2_2;