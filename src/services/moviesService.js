import {apiService, config} from "./apiService";
import {urls} from "../constans";

const moviesService = {
    getAll: (pageNum) => apiService.get(urls.movies.page(pageNum), config),
    getById: (id) => apiService.get(urls.movie.byId(id), config),
    search: (page, query) => apiService.get(urls.search.search(page, query), config)
}

export {
    moviesService
}