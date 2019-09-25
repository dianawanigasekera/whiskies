
import { combineReducers, createStore} from "redux";
import postReducer from "./Posts/postReducer";


export const reducers = combineReducers({
    posts: postReducer
})

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  }

export const store = configureStore();
