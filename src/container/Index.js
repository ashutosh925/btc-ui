import React, { useContext } from 'react';
import Sidebar from '../pages/sidebar/Index';
import TopBar from '../pages/topbar/Index';
import { Grid } from '@material-ui/core';
import { ThemeContext } from '../ThemeContext';
import ProjectDescription from '../pages/project-description/Index';

const Container = () => {
	const { 0: darkMode } = useContext(ThemeContext);

	return (
		<div>
			<TopBar />
			<br />

			<Grid container direction="row" justifyContent="center">
				<Grid item xs={8} sm={4} md={4} lg={2} xl={2}>
					<Sidebar darkTheme={darkMode} />
				</Grid>
				<Grid item sm={12} md={12} lg={10} xl={10}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};
export default React.memo(Container);
