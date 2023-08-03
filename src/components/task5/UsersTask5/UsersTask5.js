import {useFetch} from "../../../hook/task4/useFetch";
import {UserTask5} from "./UserTask5/UserTask5";
import {useArray} from "../../../hook/task5/useArray";
import {FormTask5} from "./FormTask5/FormTask5";

const UsersTask5 = () => {
    const users = useArray(useFetch('users'))

    const handleDelete = (id) => {
        users.remove(id);
    }

    const handleAddItem = (item) => {
        item.id = users.array.length === 0 ? 1 : users.array[users.array.length - 1].id + 1
        users.add(item);
    }

    return (
        <div>
            <FormTask5 handleAddItem={handleAddItem}/>
            <br/>
            {users.array?.map(user => <UserTask5 key={user.id} user={user} handleDelete={handleDelete}/>)}
        </div>
    );
};

export {
    UsersTask5
};