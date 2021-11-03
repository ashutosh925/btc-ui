import React, { useContext } from 'react';
import IndexTraitFilter from './IndexTraitFilter';
import Traits from './traits/IndexTraits';
import ItemFilter from './IndexItemFilter';
import { ThemeContext } from '../../ThemeContext';
import { useStyles } from './Styles';
import Price from './IndexPrice';
import {
	listDetails1,
	listDetails2,
	listDetails3,
	listDetails4,
	listDetails5,
	listDetails6,
	listDetails7
} from './traits/nesteditems/NestItemContent';
import Axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {getNFTByRarity} from '../../redux/actions/nftactions';

export const HideContentMd = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { 0: darkMode } = useContext(ThemeContext);
	const currentProject = JSON.parse(localStorage.getItem("currentProject"));
	const traitsList = [
		{
			headTitle: 'Ears',
			items: listDetails1
		},
		{
			headTitle: 'Eyes',
			items: listDetails2
		},
		{
			headTitle: 'Mouth',
			items: listDetails3
		},
		{
			headTitle: 'Hair color',
			items: listDetails4
		},
		{
			headTitle: 'Skin Color',
			items: listDetails5
		},
		{
			headTitle: 'Frame',
			items: listDetails6
		},
		{
			headTitle: 'Background',
			items: listDetails7
		}
	];
	
	const handleRarity = (inputFirst,inputSecond) => {
		if(inputFirst || inputSecond){
			dispatch(getNFTByRarity({
				min: inputFirst ? inputFirst : '',
				max: inputSecond ? inputSecond : '',
				project_id:  currentProject._id
			}))
		}	
	}
	let global_traits = []
	const state = useSelector((state) => state.nftReducer);

	useEffect(() => {
		getNFTData()
	});

	const getNFTData = async() => {
		const currentProject = JSON.parse(localStorage.getItem("currentProject"));
		const nft_list = await Axios.get(`/project_nft/getNFT`, {
            headers: {
                project_id:  currentProject._id,
				nft_trait: 'from index trait'
            },
        })
		let data =  nft_list.data;
		if(data.length > 0){
			data.map(nft => {
				nft.project_nft.map(element => {
					global_traits = [...global_traits,element.traits]
				})
			})
		}		 
	}

	const createTraitObject	= () => {
		global_traits.forEach(trait => {
			trait.spl
		})
	}
	return (
		<div>
			<ItemFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />
			
			<Price
				description="Rarity"
				subHeading={false}
				inputPlaceHolderFirst="Min Rank#"
				inputPlaceHolderSecond="Max Rank#"
				handlePrice={(inputFirst,inputSecond)=> handleRarity(inputFirst,inputSecond)}
			/>

			<div>
				<h4 className={classes.traits}>Traits</h4>
				{traitsList &&
					traitsList.map((data, idx) => {
						return (
							<div key={idx}>
								<Traits
									color={darkMode ? '#D1D5DB' : '#DB2777'}
									heading={data.headTitle}
									listITems={data.items}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};
