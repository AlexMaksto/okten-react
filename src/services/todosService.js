import {apiService} from "./apiService";
import {urls} from "../constans";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todosService
}