import React, { useContext } from 'react';
import { useStyles } from './Styles';
import { Grid } from '@material-ui/core';
import cardContent from './Content';
import Card from './Card';
import { ThemeContext } from '../../ThemeContext';

const NewsCollections = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Newest Collections Added</h1>
			<hr />
			<Grid container className={classes.gridParent}>
				{cardContent &&
					cardContent.map((card, idx) => {
						return (
							<div key={idx}>
								<Grid item lg={5}>
									<Card
										img={card.img}
										bottomTitle={card.paragraph}
										title={card.title}
										subtitle={card.subtitle}
										subtitle2={card.subtitle2}
										subtitle3={card.subtitle3}
										icon={card.icon}
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
export default React.memo(NewsCollections);
