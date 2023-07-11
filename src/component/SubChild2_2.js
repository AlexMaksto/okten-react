import React, {createContext} from 'react';
import SubChild1_1 from "./SubChild1_1";

export const SmthDate = createContext(null);

const SubChild2_2 = () => {

    const contextDate = 'Today perfect day';

    return (
        <SmthDate.Provider value={contextDate}>
            <div>
                <SubChild1_1/>
            </div>
        </SmthDate.Provider>
    );
};

export default SubChild2_2;