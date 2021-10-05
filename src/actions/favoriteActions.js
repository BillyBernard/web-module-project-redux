const ADD_FAVORITE = "ADD_FAVORITE";

export const addFavorite = (newFavorite) => {
    return {type: ADD_FAVORITE, payload: newFavorite}
};