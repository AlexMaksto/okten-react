import {apiService} from "./apiService";
import {urls} from "../../constans/task4/urls";

const usersService = {
    getAll: () => apiService.get(urls.users)
}

export {
    usersService
}