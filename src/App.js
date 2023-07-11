// context
// Зробити структуру компонентів -
// App
// Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1

import React from 'react';
import Child1 from "./component/Child1";
import Child2 from "./component/Child2";


const App = () => {
    return (
        <>
            <Child1/>
            <Child2/>
        </>
    );
};

export default App;