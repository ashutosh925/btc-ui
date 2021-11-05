import React, { useContext, useEffect, useState } from 'react'
import IndexTraitFilter from './IndexTraitFilter'
import Traits from './traits/IndexTraits'
import ItemFilter from './IndexItemFilter'
import { ThemeContext } from '../../ThemeContext'
import { useStyles } from './Styles'
import Price from './IndexPrice'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getNFTByRarity } from '../../redux/actions/nftactions'
import { listNft } from '../../redux/actions/nftactions'

export const HideContentMd = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { 0: darkMode } = useContext(ThemeContext)
    const currentProject = JSON.parse(localStorage.getItem('currentProject'))
    const [trait, setTrait] = useState({})

    const handleRarity = (inputFirst, inputSecond) => {
        if (inputFirst || inputSecond) {
            dispatch(
                getNFTByRarity({
                    min: inputFirst ? inputFirst : '',
                    max: inputSecond ? inputSecond : '',
                    project_id: currentProject._id,
                })
            )
        }
    }
    const state = useSelector((state) => state.nftReducer)

    useEffect(() => {
        getNFTData()
    }, [])

    const getNFTData = async () => {
        let global_traits = []
        let traitHead = []
        let nestedTrait = []
        const nft_list = await Axios.get(`/project_nft/getNFT`, {
            headers: {
                project_id: currentProject._id,
                nft_trait: 'from index trait',
            },
        })
        let data = nft_list.data
        if (data.length > 0) {
            data.map((nft) => {
                nft.project_nft.map((element) => {
                    global_traits = [...global_traits, element.traits]
                })
            })
        }
        global_traits.map((trait) => {
            trait.map((elements) => {
                let element = elements.split(',')
                let type = element[0].replace(/[^a-zA-Z ]/g, '').toString()
                if (traitHead.indexOf(type.trim()) < 0) {
                    traitHead = [...traitHead, type.trim()]
                }
                nestedTrait.push({
                    type: type.trim(),
                    value: element[1].replace(/[^a-zA-Z ]/g, '').trim(),
                })
            })
        })
        setTrait({
            traitHead,
            nestedTrait,
        })
    }

    const selectedTrait = (selectedTrait) => {
        let element
        let type
        let value
        let selectedNft = []
        if (
            state.selectedTrait &&
            selectedTrait.type === state.selectedTrait.type &&
            state.selectedTrait.value === selectedTrait.value
        ) {
            dispatch(
                listNft({
                    project_id: state.currentProject
                        ? state.currentProject._id
                        : currentProject._id,
                })
            )
            dispatch({
                type: 'SET_TRAIT',
                payload: {
                    type: '',
                    value: '',
                },
            })
            return
        } else {
            dispatch({ type: 'SET_TRAIT', payload: selectedTrait })
            state.nfts.map((nft) => {
                nft.project_nft.map((item) => {
                    // if selected trait is found in item trait then return that item
                    item.traits.map((trait) => {
                        element = trait.split(',')
                        type = element[0].replace(/[^a-zA-Z ]/g, '').toString();
                        value = element[1].replace(/[^a-zA-Z ]/g, '').toString();
                        if (
                            type.trim() === selectedTrait.type &&
                            value.trim() === selectedTrait.value
                        ) {
                            selectedNft = [...selectedNft, item]
                        }
                    })
                })
            })
            // save slected nft
            dispatch({
                type: 'SELECTED_NFT',
                payload: [
                    {
                        project_id: currentProject._id,
                        project_nft: selectedNft,
                    },
                ],
            })
        }
    }

    return (
        <div>
            <ItemFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />

            <Price
                description="Rarity"
                subHeading={false}
                inputPlaceHolderFirst="Min Rank#"
                inputPlaceHolderSecond="Max Rank#"
                handlePrice={(inputFirst, inputSecond) =>
                    handleRarity(inputFirst, inputSecond)
                }
            />

            <div>
                <h4 className={classes.traits}>Traits</h4>
                {trait.traitHead &&
                    trait.traitHead.map((data, idx) => {
                        return (
                            <div key={idx}>
                                <Traits
                                    color={darkMode ? '#D1D5DB' : '#DB2777'}
                                    heading={data}
                                    listITems={
                                        trait.nestedTrait
                                            ? trait.nestedTrait
                                            : {}
                                    }
                                    selectedTrait={(trait) =>
                                        selectedTrait(trait)
                                    }
                                />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
