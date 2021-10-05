export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITES";

export const addFavorite = (newFavorite) => {
    return {type: ADD_FAVORITE, payload: newFavorite}
};

export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
};

export const toggleFavorite = () => {
    return { type: TOGGLE_FAVORITE };
  }