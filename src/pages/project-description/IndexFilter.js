import React, { useContext } from 'react';
import { useStyles } from './Styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputComponent from '../../components/Input';
import './override.css';
import { Grid } from '@material-ui/core';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';
import imgicon from '../../assets/imgicon.svg';
const Filter = () => {
	const classes = useStyles();
	const { 0: darkMode } = useContext(ThemeContext);

	return (
		<div>
			<Grid container spacing={1}>
				<Grid item lg={3}>
					<p className={classes.sortingTitle}>10,000 Total Primate Social Society Official</p>
				</Grid>
				{/* <Grid item lg={1}>
					<p className={classes.sortingTitle}>Price Floor: 0.05 ETH</p>
				</Grid> */}
				<Grid item={1}>
					<p className={classes.sortingTitle}>Sort by</p>
				</Grid>
				<Grid item={3}>
					<FormControl>
						<Select className={classes.SelectInput} style={{ background: darkMode ? '#374151' : 'white' }}>
							<MenuItem>Hellow</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				{/* <Grid item lg={2}>
					<div className="d-flex">
						<ButtonComponent
							description={<span>IDs</span>}
							padding="3px 1px"
							margin="0px 7px"
							width="40px"
							color={darkMode ? '#9CA3AF' : '#BE185D'}
							border="1px solid #525252 "
							borderRadius="7px"
							// bgColor={darkMode ? '#6B7280' : 'transparent'}
							bgcolorHover="rgb(241 239 240)"
							onClick={()=>console.log('sorting')}
						/>
						<ButtonComponent
							description={<img src={imgicon} alt="btnicon" style={{ width: '15px', height: '15px' }} />}
							padding="3px 1px"
							margin="0px 7px"
							width="40px"
							color={darkMode ? '#FFFFFF' : '#BE185D'}
							border="1px solid #525252 "
							borderRadius="7px"
							// bgColor={darkMode ? '#6B7280' : 'transparent'}
							bgcolorHover="rgb(241 239 240)"
							onClick={()=>console.log('sorting')}
						/>
					</div>
				</Grid> */}

				<Grid item lg={3}>
					<div className="d-flex">
						<p className={classes.sortingTitle}>Page</p>
						<InputComponent
							placeHolder={'1'}
							width="30%"
							bgColor={darkMode ? '#374151' : 'white'}
							pColor="#EC407A"
							value=""
						/>
						<p className={classes.sortingTitle}>of 209</p>
						<div>
							<ButtonComponent
								description="Next >"
								padding="2px 2px"
								margin="0px 7px"
								color="#FFFFFF"
								width="60px"
								border="1px solid #525252 "
								borderRadius="7px"
								bgColor={darkMode ? '#6B7280' : '#BE185D'}
								bgcolorHover="rgb(167 18 80)"
								onClick={()=>console.log('Page')}
							/>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
export default React.memo(Filter);
