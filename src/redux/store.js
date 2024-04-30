import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  auth: authReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
