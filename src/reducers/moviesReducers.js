import { SHOW_POPULAR, SHOW_MOVIES, SHOW_DETAILS } from '../actions/types';

const initialState = {
    movies: []
}

export default function(state= initialState, action) {
    switch(action.type) {
        case SHOW_POPULAR:
        return {
            ...state,
            movies: action.payload
        }
        case SHOW_MOVIES:
        return {
            ...state,
            movies: action.payload
        }
        case SHOW_DETAILS:
        return {
            ...state,
            movie: action.payload
        }
        default:
            return state
    }
}