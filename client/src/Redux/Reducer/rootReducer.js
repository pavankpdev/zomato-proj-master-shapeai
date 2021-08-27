import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";

const rootReducer = combineReducers({ restaurant });

export default rootReducer;
