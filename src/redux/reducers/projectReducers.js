import { GET_PROJECT, GET_PROJECT_FAILED, GET_PROJECT_REQUEST } from "../Types"

export const projectListReducer =
 (state = {loading:true , projects:[]},
  action
  ) => {
   switch(action.type){
     case GET_PROJECT_REQUEST:
      return { loading: true };
      case GET_PROJECT:
        return {
          loading: false,
          projects: action.payload.data,
        };
      case GET_PROJECT_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
  }}