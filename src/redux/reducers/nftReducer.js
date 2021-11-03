import {
    CURRENT_PROJECT,
    GET_NFT,
    GET_NFT_FAILED,
    GET_NFT_REQUEST,
    CURRENT_NFT,
    GET_NFT_BY_RARITY,
} from '../Types'

export const nftListReducer = (state = { loading: true, nfts: [] }, action) => {
    switch (action.type) {
        case GET_NFT_REQUEST:
            return { ...state, loading: true }
        case GET_NFT:
            return {
                ...state,
                nfts: action.payload.data,
            }
        case GET_NFT_FAILED:
            return { ...state, error: action.payload }
        case CURRENT_PROJECT:
            return { ...state, currentProject: action.payload }
        case CURRENT_NFT:
            return { ...state, currentNFT: action.payload }
        case GET_NFT_BY_RARITY:
            if(Object.keys(action.payload.data).length > 0){
                return { ...state, nfts: [action.payload.data] }
            }else{
                return { ...state, nfts: [] }
            }
        default:
            return state
    }
}
