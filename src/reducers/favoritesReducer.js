const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, {title: action.payload}]
      };
    case DELETE_FAVORITE:
      return {
        favorites: [state.favorites.filter((item) => action.payload !== item.id)],
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
}

export default reducer;