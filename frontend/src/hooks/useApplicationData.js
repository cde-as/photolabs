import { useReducer } from "react";

const initialState = {
  displayModal: false,
  favoritedPhotos: [],
  selectedPhoto: null,
};

export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const id = action.payload;
      if (state.favoritedPhotos.includes(id)) {
        return {
          ...state,
          favoritedPhotos: state.favoritedPhotos.filter((fav) => fav !== id),
          numFavoritedPhotos: state.numFavoritedPhotos - 1,
        };
      } else {
        return {
          ...state,
          favoritedPhotos: [...state.favoritedPhotos, id],
          numFavoritedPhotos: state.numFavoritedPhotos + 1,
        };
      }
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        selectedPhoto: action.payload,
        displayModal: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false,
        selectedPhoto: null,
      };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numFavoritedPhotos = state.favoritedPhotos.length;

  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    numFavoritedPhotos,
  };
};

export default useApplicationData;
