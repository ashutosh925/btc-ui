import React from 'react';
import { useStyles } from './Styles';
import SingleContent from './SingleConntent';
import { Grid } from '@material-ui/core';
const TopCollection = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Top Collections</h1>
			<hr />
			<Grid container spacing={2}>
				<Grid item md={5} lg={4}>
					<SingleContent topHeading="7 Day Volume" />
				</Grid>
				<Grid item md={5} lg={4}>
					<SingleContent topHeading="Top by Total Volume" />
				</Grid>
				<Grid item md={5} lg={4}>
					<SingleContent topHeading="Top by 7 Day Average Price" />
				</Grid>
				<Grid item md={5} lg={4}>
					<SingleContent topHeading="Top by Owner Count" />
				</Grid>
			</Grid>

			<h5 style={{ color: '#DB2777', fontSize: '16px', textAlign: 'center' }}>
				Terms of Use - Powered by OpenSea
			</h5>
		</div>
	);
};
export default TopCollection;
