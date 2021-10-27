import { GET_NFT, GET_NFT_FAILED, GET_NFT_REQUEST } from "../Types";
import Axios from 'axios';
export const listNft = (project) =>
  async (dispatch) => {
    dispatch({
      type: GET_NFT_REQUEST,
    });
    try {
      const data  = await Axios.get(
        `/project_nft/getNFT`,{
          headers:{
            project_name:project && project.project_name
          }
        }
      );
      dispatch({ type: GET_NFT, payload: data });
    } catch (error) {
      dispatch({ type: GET_NFT_FAILED, payload: error.message });
    }
  };