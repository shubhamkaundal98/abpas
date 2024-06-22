// src/redux/actions/dataActions.js
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../constants/actionTypes';
  import axios from 'axios';
  
  export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_DATA_REQUEST });
      try {
        const response = await axios.get('https://api.example.com/data');
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      }
    };
  };
  