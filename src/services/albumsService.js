import {apiService} from "./apiService";
import {urls} from "../constans";

const albumsService = {
    getAll: () => apiService.get(urls.albums)
}

export {
    albumsService
}