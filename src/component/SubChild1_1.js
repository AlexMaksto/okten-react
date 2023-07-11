import React, {useContext} from 'react';
import {SmthDate} from "../App";

const SubChild1_1 = () => {

    const day = useContext(SmthDate)

    return (
        <div>
            <p>{day}</p>
        </div>
    );
};

export default SubChild1_1;