import React, {useContext} from 'react';
import {SmthDate} from "./SubChild2_2";

const SubChild1_1 = () => {

    const day = useContext(SmthDate)

    return (
        <div>
            <p>{day}</p>
        </div>
    );
};

export default SubChild1_1;