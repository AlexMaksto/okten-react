import {apiService, config} from "./apiService";
import {urls} from "../constans";

const genresService = {
    getAll: () => apiService.get(urls.genres, config),
    getGenresId: (page, genresId) => apiService.get(urls.moviesGenres.genres(page, genresId), config)
}

export {
    genresService
}