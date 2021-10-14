import React, { useContext } from 'react';
import TopBar from '../../pages/topbar/Index';
import { Grid } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { ThemeContext } from '../../ThemeContext';
import ProjectDescription from '../../pages/project-description/Index';

const Container = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const themeLight = createTheme({
		palette: {
			background: {
				default: darkMode ? '#e4f0e2' : 'light'
			}
		}
	});
	const themeMode = createTheme({
		palette: {
			type: darkMode ? 'dark' : 'light'
		}
	});
	return (
		<div>
			<TopBar />
			<br />
			<Grid container direction="row" justifyContent="center">
				<Grid item sm={12} md={12} lg={10} xl={10}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};
export default Container;
