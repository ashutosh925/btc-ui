import React, { useContext } from 'react';
// import { useStyles } from './Styles';
import contentMid from './ProjectContent';
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';

const Collection = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	// const classes = useStyles();

	return (
		<div>
			<Grid container>
				{contentMid &&
					contentMid.map((card, idx) => {
						return (
							<div key={idx}>
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
export default Collection;
