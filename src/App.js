// Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень
// 1.
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users

import React from 'react';
import UserContainer from "./components/user/UserContainer";

const App = () => {
    return (
        <div>
          <UserContainer/>
        </div>
    );
};

export default App;