import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  movieState: movieReducer,
  favoriteState: favoriteReducer,
});

export default rootReducer;