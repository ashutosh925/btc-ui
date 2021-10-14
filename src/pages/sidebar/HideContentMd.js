import React, { useContext } from 'react';
import IndexTraitFilter from './IndexTraitFilter';
import Traits from './IndexTraits';
import ItemFilter from './IndexItemFilter';
import { ThemeContext } from '../../ThemeContext';

import Price from './IndexPrice';
export const HideContentMd = () => {
	const { 0: darkMode } = useContext(ThemeContext);

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
			<Traits color={darkMode ? '#D1D5DB' : '#DB2777'} />
		</div>
	);
};
