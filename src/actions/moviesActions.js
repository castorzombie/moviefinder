import {SHOW_MOVIES, SHOW_DETAILS, SHOW_POPULAR} from './types';

import axios from 'axios';

const apikey = 'd43c608c20cd1865e5f2fa7e9dcaea08';
const apiurl = 'https://api.themoviedb.org';

export const showPopular = () => async dispatch => {
    try{
        const response = await axios.get(`${apiurl}/3/movie/popular?api_key=${apikey}&language=en-US`);
        dispatch({
            type: SHOW_POPULAR,
            payload: response.data
        })
    }catch(e){
        console.log(e)
    }
}

export const showMovies = (search) => async dispatch => {
    try {
        const response = await axios.get(`${apiurl}/3/search/movie?api_key=${apikey}&language=en-US&query=${search}&page=1&include_adult=false`);
        dispatch({
            type: SHOW_MOVIES,
            payload: response.data
        })
    }catch(e){
        console.log(e)
    }
}

export const showDetails = (id) => async dispatch => {
    try {
        const response = await axios.get(`${apiurl}/3/movie/${id}?api_key=${apikey}&language=en-US`);
        dispatch({
            type: SHOW_DETAILS,
            payload: response.data
        })
    }catch(e) {
        console.log(e)
    }
}

