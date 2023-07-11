import React, {useContext} from 'react';
import {Context} from "../App";

const SubChild22 = () => {

    const {setData} = useContext(Context);
    setData(() => `Today perfect day`);

    return (
        <div>
        </div>
    );
};

export default SubChild22;