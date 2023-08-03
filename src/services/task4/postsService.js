import {apiService} from "./apiService";
import {urls} from "../../constans/task4/urls";

const postsService = {
    getAll: () => apiService.get(urls.posts)
}

export {
    postsService
}