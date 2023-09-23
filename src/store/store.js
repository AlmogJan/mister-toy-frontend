import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import { toyReducer } from "./reducer/toy.reducer";

const rootReducer = combineReducers({
  toyModule: toyReducer,
});

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose();
export const store = createStore(rootReducer, middleware);
window.gStore = store;
