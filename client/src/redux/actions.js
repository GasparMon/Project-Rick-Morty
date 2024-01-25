import axios from "axios";
import { ADD_FAV, ALLEPISODES, FILTER, ORDER, REMOVE_FAV } from "./types";
const url = import.meta.env.VITE_URL_HOST

export function addFav(character) {
  //   return {
  //       type: ADD_FAV,
  //       payload: character,
  //   }

  // const endpoint = `http://localhost:3001/rickandmorty/fav`;

  // return async (dispatch) => {
  //   try {
  //     const { data } = await axios.post(endpoint, character);

  //     return dispatch({
  //       type: ADD_FAV,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return {
    type: ADD_FAV,
    payload: character,
  }
}

export function removeFav(id) {
  //   return {
  //     type: REMOVE_FAV,
  //     payload: id,
  //   };

  // const endpoint = `http://localhost:3001/rickandmorty/fav/` + id;

  // return async (dispatch) => {
  //   try{
  //       const { data } = await axios.delete(endpoint);

  //   return dispatch({
  //     type: REMOVE_FAV,
  //     payload: data,
  //   });
  //   } catch (error) {
  //       alert(error.message);
  //   }
  // };

  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}

export function allEpisodes(){
  const endpoint = `${url}/rickandmorty/allepisodes`;

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: ALLEPISODES,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  
}
