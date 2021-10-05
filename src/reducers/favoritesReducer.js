import movies from '../data';
export const initialState = {
    favorites: movies,
    displayedFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: action.payload,
                displayedFavorites: false,
            }
            default:
                return state;
    }
};

export default favoritesReducer;