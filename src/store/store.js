import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from "./sagas";

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
))

saga.run(sagaWatcher)