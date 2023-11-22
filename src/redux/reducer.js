import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {

    myFavorites: [],

}

export default function reducer (state = initialState, action) {

    switch(action.type){

        case ADD_FAV:

        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
        }

        case REMOVE_FAV:

        const filterCharacters = state.myFavorites.filter((element) => element.id !== Number(action.payload))

        return {
            ...state,
            myFavorites: filterCharacters,
        }

        default:

        return {
            ...state
        }
    }
}