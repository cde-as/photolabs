import { useReducer, useEffect } from "react";

const initialState = {
  displayModal: false,
  favoritedPhotos: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  selectedTopic: null,
  similarPhotos: [],
};

export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS:",
  SET_SIMILAR_PHOTOS: "SET_SIMILAR_PHOTOS",
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
        //similarPhotos: action.payload.similarPhotos,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false,
        selectedPhoto: null,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_SIMILAR_PHOTOS:
      return { ...state, similarPhotos: action.payload };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error("Error fetching photos", error));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => console.error("Error fetching topics", error));
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      const id = state.selectedTopic;
      fetch(`/api/topics/photos/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
        })
        .catch((error) =>
          console.error("Error fetching photos by topic:", error)
        );
    }
  }, [state.selectedTopic]);

  const setSelectedTopic = (id) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: id });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
    dispatch({
      type: ACTIONS.SET_SIMILAR_PHOTOS,
      payload: photo.similarPhotos,
    });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const numFavoritedPhotos = state.favoritedPhotos.length;

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    numFavoritedPhotos,
    setSelectedTopic,
  };
};

export default useApplicationData;
