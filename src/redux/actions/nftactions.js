import {
    GET_NFT,
    GET_NFT_FAILED,
    GET_NFT_REQUEST,
    GET_NFT_BY_RARITY_REQUEST,
    GET_NFT_BY_RARITY,
    GET_NFT_BY_RARITY_FAILED,
} from '../Types'
import Axios from 'axios'

export const listNft = (project) => async (dispatch) => {
    dispatch({
        type: GET_NFT_REQUEST,
    })
    try {
        const data = await Axios.get(`/project_nft/getNFT`, {
            headers: {
                project_id: project && project.project_id,
            },
        })
        dispatch({ type: GET_NFT, payload: data })
    } catch (error) {
        dispatch({ type: GET_NFT_FAILED, payload: error.message })
    }
}

export const getNFTByRarity = (args) => async (dispatch) => {
    dispatch({
        type: GET_NFT_BY_RARITY_REQUEST,
    })
    try {
        const data = await Axios.get(`/project_nft/getNFTByRarity`, {
          headers: {
            ...args
          }
        })
        dispatch({ type: GET_NFT_BY_RARITY, payload: data })
    } catch (error) {
        dispatch({ type: GET_NFT_BY_RARITY_FAILED, payload: error.message })
    }
}
