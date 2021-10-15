import React, { useContext } from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';

import { ThemeContext } from '../../ThemeContext';
import { Grid } from '@material-ui/core';

const SettingsButtons = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const buttons = [
		{
			desciption: 'Rarity Score',
			bgcolor: '#BE185D',
			width: '90px',
			color: '#FFFFFF',
			bgcolorHover: 'rgb(167 18 80)'
		},
		{
			desciption: 'Trait Rarity',
			bgcolor: darkMode ? '#6B7280' : 'transparent',
			width: '90ox',
			color: darkMode ? '#FFFFFF' : '#BE185D',
			bgcolorHover: darkMode ? '#6B7280' : 'rgb(241 239 240)'
		},
		{
			desciption: 'Statistical ',
			bgcolor: darkMode ? '#6B7280' : 'transparent',
			width: '90px',
			color: darkMode ? '#FFFFFF' : '#BE185D',
			bgcolorHover: darkMode ? '#6B7280' : 'rgb(241 239 240)'
		},
		{
			desciption: 'Average ',
			bgcolor: darkMode ? '#6B7280' : 'transparent',
			width: '90px',
			color: darkMode ? '#FFFFFF' : '#BE185D',
			bgcolorHover: darkMode ? '#6B7280' : 'rgb(241 239 240)'
		}
	];
	return (
		<div className="mt-2 mb-2">
			<Grid container>
				<Grid item lg={6}>
					<span className={classes.descriptionWarning}>Method</span>
					<div className="d-flex mt-2 mb-2">
						{buttons &&
							buttons.map((btns, idx) => {
								return (
									<div key={idx}>
										<ButtonComponent
											description={btns.desciption}
											padding="0px 2px"
											// width={btns.width}
											width="90px"
											margin="0px 7px"
											color={btns.color}
											border="1px solid #BE185D "
											borderRadius="7px"
											bgColor={btns.bgcolor}
											bgcolorHover={btns.bgcolorHover}
										/>
									</div>
								);
							})}
					</div>
				</Grid>
				<Grid item lg={3}>
					<span className={classes.descriptionWarning}>Trait Normalization</span>
					<div className="d-flex">
						<ButtonComponent
							description="ON"
							padding="0px 6px"
							width="40px"
							borderRadius="6px"
							color="#FFFFFF"
							bgColor="#BE185D"
							border="none"
							height="26px"
							bgcolorHover="rgb(167 18 80)"
						/>
						<div className="ms-1">
							<ButtonComponent
								description="OFF"
								padding="0px 6px"
								width="40px"
								borderRadius="6px"
								color={darkMode ? '#FFFFFF' : '#BE185D'}
								bgColor={darkMode ? '#6B7280' : 'transparent'}
								border="1px solid #BE185D "
								height="26px"
								bgcolorHover={darkMode ? '#6B7280' : 'rgb(241 239 240)'}
							/>
						</div>
					</div>
				</Grid>
				<Grid item lg={3}>
					<span className={classes.descriptionWarning}>Additional Weighting</span>
					<div className="d-flex">
						<ButtonComponent
							description="ON"
							padding="0px 6px"
							borderRadius="6px"
							color="#FFFFFF"
							bgColor="#BE185D"
							border="none"
							height="26px"
							bgcolorHover="rgb(167 18 80)"
						/>
						<div className="ms-1">
							<ButtonComponent
								description="OFF"
								padding="0px 6px"
								borderRadius="6px"
								color={darkMode ? '#FFFFFF' : '#BE185D'}
								bgColor={darkMode ? '#6B7280' : 'transparent'}
								border="1px solid #BE185D "
								height="26px"
								bgcolorHover={darkMode ? '#6B7280' : 'rgb(241 239 240)'}
							/>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
export default SettingsButtons;
