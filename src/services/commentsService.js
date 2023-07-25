import {apiService} from "./apiService";
import {urls} from "../constans";

const commentsService = {
    getAll: () => apiService.get(urls.comments)
}

export {
    commentsService
}