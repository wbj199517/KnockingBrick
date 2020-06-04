import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  restaurants,
  restaurant,
  keyword,
} from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const appReducers = combineReducers({
  restaurants,
  restaurant,
  keyword,
});

const store = createStore(
  appReducers,
  {  
    restaurants: [],
    restaurant: null,
    keyword:'',
  },
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
