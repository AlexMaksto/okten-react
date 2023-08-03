const task1 = `Створити компоненту TestUseMemo в та викликати її в Апп
 TestUseMemo має пропсу data (довільне значення та дані)
 Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється`;
const task2 = `Зробити те саме, але з використанням useCallback`;
const task3 = `Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
    Сигнатура хука function useToggle(defaultValue)`;
const task4 = `Створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.
    Сигнатура хука function(endpoint)`;
const task5 = `створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
В середині хука реалізувати методи add(item), remove(id)`;

const tasks = {
    task1,
    task2,
    task3,
    task4,
    task5
}

export {
    tasks
}