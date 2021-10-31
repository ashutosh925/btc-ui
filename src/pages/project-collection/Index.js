import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contentMid from './ProjectContent';
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';

const Collection = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const modalopen = (card) => {
		dispatch({ type: 'CURRENT_NFT', payload: card });
		dispatch({ type: 'GET ID', payload: card.id });
		dispatch({ type: 'MODAL OPEN', payload: true });
	};
	const state = useSelector((state) => state.nftReducer);
	const {loading, nfts} = state
	const [data] = nfts


	return (
		<div>
			<Grid container>
				{data &&
					data.project_nft.map((card, idx) => {
						return (
							<div
								key={idx}
								onClick={() => {
									modalopen(card);
								}}
							>
								<Grid item sm={6} md={4} lg={3}>
									<MediaCard
										id={idx}
										aHrefs={card.title}
										img={card.image}
										bottomTitle={card.name_of_nft}
										darkTheme={darkMode}
									/>
								</Grid>
							</div>
						);
					})}
			</Grid>
		</div>
	);
};
export default React.memo(Collection);
