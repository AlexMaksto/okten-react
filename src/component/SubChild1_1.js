import React, {useContext} from 'react';
import {Context} from "../App";

const SubChild11 = () => {

    const {data} = useContext(Context)

    return (
        <div>
            <p>{data}</p>
        </div>
    );
};

export default SubChild11;