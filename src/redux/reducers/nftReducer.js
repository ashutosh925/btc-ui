import { CURRENT_PROJECT, GET_NFT, GET_NFT_FAILED, GET_NFT_REQUEST } from "../Types"

export const nftListReducer =
 (state = {loading:true , nfts:[]},
  action
  ) => {
   switch(action.type){
     case GET_NFT_REQUEST:
      return { loading: true };
      case GET_NFT:
        return {
          loading: false,
          nfts: action.payload.data,
        };
      case GET_NFT_FAILED:
        return { loading: false, error: action.payload };
        case CURRENT_PROJECT:
          return {...state , currentProject:action.payload }
      default:
        return state;
  }}
