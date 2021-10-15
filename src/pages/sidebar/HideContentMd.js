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
export const HideContentMd = () => {
	const classes = useStyles();
	const { 0: darkMode } = useContext(ThemeContext);
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
	return (
		<div>
			<ItemFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />
			<Price
				description="Price"
				subHeading={true}
				inputPlaceHolderFirst="Min ETH"
				inputPlaceHolderSecond="Max ETH"
			/>
			<Price
				description="Rarity"
				subHeading={false}
				inputPlaceHolderFirst="Min Rank#"
				inputPlaceHolderSecond="Max Rank#"
			/>
			<IndexTraitFilter color={darkMode ? '#D1D5DB' : '#4B5563'} />
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
