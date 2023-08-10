import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import {carsReducer} from "./reducers/carsReducer";

const rootReducer = combineReducers({
    cars: carsReducer
})

const composerEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composerEnhancers(applyMiddleware(thunk)));

export {
    store
}