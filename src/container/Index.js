import React, { useContext } from 'react';
import Sidebar from '../pages/sidebar/Index';
import TopBar from '../pages/topbar/Index';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from '../ThemeContext';
import ProjectDescription from '../pages/project-description/Index';
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
			<Grid container direction="row" justifyContent="center">
				<Grid item sm={8} lg={3}>
					<Sidebar darkTheme={darkMode} />
				</Grid>
				<Grid item sm={8} lg={9}>
					<ProjectDescription />
				</Grid>
			</Grid>
		</div>
	);
};
export default Container;
