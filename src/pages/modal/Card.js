import React from 'react';
import { Grid } from '@material-ui/core';
import ModelCardLeft from './ModelCardLeft';
import ModelCardRight from './ModelCardRight';
const Card = () => {
	return (
		<div>
			<Grid container spacing={4} justifyContent="center">
				<Grid Item md={8} lg={6}>
					<ModelCardLeft />
				</Grid>
				<Grid Item md={8} lg={6}>
					<ModelCardRight />
				</Grid>
			</Grid>
		</div>
	);
};
export default React.memo(Card);
