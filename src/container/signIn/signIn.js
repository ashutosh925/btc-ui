import React, { useContext } from 'react';
import TopBar from '../../pages/topbar/Index';
import { Grid } from '@material-ui/core';
// import { createTheme } from '@material-ui/core/styles';
import { ThemeContext } from '../../ThemeContext';
import Login from '../../pages/signIn/Login';

const Projects = () => {
	const { 0: darkMode } = useContext(ThemeContext);

	return (
		<div>
			<Grid Projects direction="row" justifyContent="center">
				<Grid item sm={12} md={12} lg={10} xl={10}>
					<div className="parent-mid">
						{/* <NewsCollections/> */}
                            {/* SINNHHHH */}
                            {/* <SignIn /> */}
                            <Login />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
export default React.memo(Projects);
