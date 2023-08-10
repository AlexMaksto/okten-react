import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    get: () => apiService.get(urls.cars),
    post: (car) => apiService.post(urls.cars, car),
    put: (car) => {
        const url = `${urls.cars}/${car.id}`
        return apiService.put(url, car)
    },
    delete: (id) => {
        const url = `${urls.cars}/${id}`
        return apiService.delete(url)
    }
}

export {
    carsService
}