import React, { useState, useContext } from 'react';
import { useStyles } from './Styles';
import SelectDropDown from './IndexSelect';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
// import ItemFilter from './IndexItemFilter';
// import Price from './IndexPrice';
// import IndexTraitFilter from './IndexTraitFilter';
// import Traits from './IndexTraits';
// import Paper from '@material-ui/core/Paper';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';
import { ThemeContext } from '../../ThemeContext';
import Hidden from '@material-ui/core/Hidden';
import { HideContentMd } from './HideContentMd';
const Sidebar = (props) => {
	const [ showFilters, setFilters ] = useState(false);
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles(props);
	const themeLight = createTheme({
		palette: {
			background: {
				default: darkMode ? '#1F2937' : '#FFFFFF'
			}
		}
	});
	const filterToggle = () => {
		setFilters(!showFilters);
		console.log('from filter', showFilters);
	};
	console.log('from filter', showFilters);
	return (
		<ThemeProvider theme={themeLight}>
			<CssBaseline>
				<div className={classes.root}>
					<Typography>
						<h1 className={classes.headingProject}>Project</h1>
					</Typography>

					<SelectDropDown />
					<div className="d-flex w-100 p-3 justify-content-center">
						<InputComponent
							placeHolder="ID.."
							width="46%"
							bgColor={darkMode ? '#374151' : 'white'}
							// pColor="#EC407A"
							valueColor={darkMode ? '#D1D5DB' : 'black'}
						/>
						<ButtonComponent
							description="Look up"
							padding="0px 7px"
							width="90px"
							borderRadius="8px"
							color="white"
							bgColor="#BE185D"
							border="none"
							height="27px"
							bgcolorHover="rgb(167 18 80)"
						/>
					</div>
					<Hidden only={[ 'xs', 'sm', 'md' ]}>
						<HideContentMd />
					</Hidden>

					<Hidden only={[ 'lg', 'xl' ]}>
						<button onClick={filterToggle} style={{ background: 'none', border: 'none' }}>
							<ButtonComponent
								description="Show Filters"
								padding="0px 4px"
								width="120px"
								borderRadius="8px"
								color="white"
								bgColor="#BE185D"
								border="none"
								height="27px"
								bgcolorHover="rgb(167 18 80)"
							/>
						</button>
					</Hidden>
					{showFilters ? <HideContentMd /> : null}
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
};
export default Sidebar;
