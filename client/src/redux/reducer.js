import { allEpisodes } from "./actions";
import { ADD_FAV, ALLEPISODES, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  allEpisodes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
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

      // return {
      //   ...state,
      //   myFavorites: action.payload,
      //   allCharacters: action.payload,
      // };

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

    case ALLEPISODES:
      return {
        ...state,
        allEpisodes:[],
        allEpisodes: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
