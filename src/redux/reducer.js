import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      const filterCharacters = state.allCharacters.filter(
        (element) => element.id !== Number(action.payload)
      );

      return {
        ...state,
        allCharacters: filterCharacters,
        myFavorites: filterCharacters,
      };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }

      const filterGender = state.allCharacters.filter(
        (element) => element.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER:
      const orderedCopy = [...state.myFavorites];
      if (action.payload === "A") {
        orderedCopy.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderedCopy.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderedCopy,
      };

    default:
      return {
        ...state,
      };
  }
}
