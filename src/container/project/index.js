import React, { useContext } from 'react';
import TopBar from '../../pages/topbar/Index';
import { Grid } from '@material-ui/core';
import NewsCollections from "../../pages/newest-collection/Index";

const Projects = () => {

	return (
		<div>
			<TopBar />
			<br />

			<Grid Projects direction="row" justifyContent="center" style={{paddingLeft: '10%'}}>
				<Grid item sm={12} md={12} lg={10} xl={10}>
					<div className="parent-mid">
						<NewsCollections/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
export default React.memo(Projects);
