import React, { useContext, useEffect } from 'react';
import { useStyles } from './Styles';
import { Grid } from '@material-ui/core';
import cardContent from './Content';
import Card from './Card';
import { ThemeContext } from '../../ThemeContext';
import { listProject } from '../../redux/actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';

const NewsCollections = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const dispatch = useDispatch();	
	const projectReducer = useSelector((state) =>  state.projectReducer);
	const {loading , projects , error} =projectReducer;
console.log(projects);


	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Newest Collections Added</h1>
			<hr />
			<Grid container className={classes.gridParent}>

				{projects &&
					projects.map((card, idx) => {
						return (
							<div key={idx}>
								<Grid item lg={5}>
									<Card
										img={card.project_file}
										bottomTitle={card.project_description}
										title={card.project_name}
										subtitle={card.project_added}
										subtitle2={card.project_owner}
										// subtitle3={card.subtitle3}
										icon={card.project_logo}
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
