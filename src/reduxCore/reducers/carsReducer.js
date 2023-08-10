import {carActionTypes} from "../actions/carsActions";

const initialState = {
    cars: [],
    carForUpdate: {},
    refresh: false
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload,
                carForUpdate: {},
                refresh: false
            }
        case carActionTypes.UPDATE_CAR:
            return {
                ...state,
                carForUpdate: action.payload,
            }
        case carActionTypes.REFRESH_CARS:
            return {
                refresh: true,
                carForUpdate: {}
            }
        default:
            return state
    }
}

export {
    carsReducer
}