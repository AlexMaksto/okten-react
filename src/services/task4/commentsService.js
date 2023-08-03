import {apiService} from "./apiService";
import {urls} from "../../constans/task4/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments)
}

export {
    commentsService
}