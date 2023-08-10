import {carsService} from "../../services/carsService";

const carActionTypes = {
    SET_CARS: 'SET_CARS',
    UPDATE_CAR: 'UPDATE_CAR',
    REFRESH_CARS: 'REFRESH_CARS'
}
const carsActions = {
    setCars: (data) => ({type: carActionTypes.SET_CARS, payload: data}),
    addCar: (car) => ({type: carActionTypes.ADD_CAR, payload: car}),
    updateCar: (car) => ({type: carActionTypes.UPDATE_CAR, payload: car}),
    refreshCars: () => ({type: carActionTypes.REFRESH_CARS})
}

const getCars = () => (dispatch) => {
    carsService.get()
        .then(({data}) => {
            dispatch(carsActions.setCars(data))
        })
}

const addCar = (car) => (dispatch) => {
    carsService.post(car)
        .then(() => dispatch(carsActions.refreshCars()));
}

const addUpdateCar = (car) => (dispatch) => {
    dispatch(carsActions.updateCar(car));
}

const updateCar = (car) => (dispatch) => {
    carsService.put(car)
        .then(() => dispatch(carsActions.refreshCars()));
}

const deleteCars = (id) => (dispatch) => {
    carsService.delete(id)
        .then(() => {
                window.alert(`You destroy beautiful car :(`);
                dispatch(carsActions.refreshCars());
            }
        )
}

export {
    carActionTypes,
    getCars,
    addCar,
    addUpdateCar,
    updateCar,
    deleteCars
}