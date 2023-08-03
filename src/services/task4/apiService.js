import axios from "axios";
import {baseURL} from "../../constans/task4/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}