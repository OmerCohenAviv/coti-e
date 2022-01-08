import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";

import countriesReducer from "./reducers/countriesReducer";
import countriesSagas from "./sagas/sagas";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(countriesSagas);

export default store;
