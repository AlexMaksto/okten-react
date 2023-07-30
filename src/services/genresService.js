import {apiService, config} from "./apiService";
import {urls} from "../constans";

const genresService = {
    getAll: () => apiService.get(urls.genres, config)
}

export {
    genresService
}