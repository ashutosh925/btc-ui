import {  GET_PROJECT, GET_PROJECT_FAILED, GET_PROJECT_REQUEST } from "../Types";
import Axios from 'axios';
export const listProject = () =>
  async (dispatch) => {
    dispatch({
      type: GET_PROJECT_REQUEST,
    });
    try {
      const  data  = await Axios.get(
        `/projects`
      );
      dispatch({ type: GET_PROJECT, payload: data });
    } catch (error) {
      dispatch({ type: GET_PROJECT_FAILED, payload: error.message });
    }
  };