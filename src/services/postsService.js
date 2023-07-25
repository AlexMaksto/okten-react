import {apiService} from "./apiService";
import {urls} from "../constans";

const postsService = {
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postsService
}