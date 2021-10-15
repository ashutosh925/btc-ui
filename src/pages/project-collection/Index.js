import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contentMid from './ProjectContent';
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';

const Collection = () => {
	const state = useSelector((state) => state.auth);
	const { 0: darkMode } = useContext(ThemeContext);
	const dispatch = useDispatch();
	const modalopen = (id) => {
		dispatch({ type: 'GET ID', payload: id });
		dispatch({ type: 'MODAL OPEN', payload: true });
	};
	return (
		<div>
			<Grid container>
				{contentMid &&
					contentMid.map((card, idx) => {
						return (
							<div
								key={idx}
								onClick={() => {
									modalopen(card.id);
								}}
							>
								<Grid item sm={6} md={4} lg={3}>
									<MediaCard
										id={idx}
										aHrefs={card.title}
										img={card.img}
										bottomTitle={card.bottomTitle}
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
