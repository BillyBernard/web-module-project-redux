import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoriteActions";
import movies from "../data";
const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item, index) => action.payload !== item[index]
        ),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default favoriteReducer;