import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from "./mainReducer";

const reducers = combineReducers({
    mainPage: mainReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store;