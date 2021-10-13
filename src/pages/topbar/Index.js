import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './Styles';
import Grid from '@material-ui/core/Grid';
import ButtonComponent from '../../components/Button';
import twitter from '../../assets/twitter.png';
import medium from '../../assets/medium.png';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Avatars from './TopbarAvatars';
import darkTheme from '../../assets/darktheme.svg';
// import { ReactComponent as YourSvg } from '../../assets/darktheme.svg';
const TopBar = (props) => {
	const classes = useStyles();
	const { width } = props;
	console.log(width);
	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Grid container className={classes.gridParent} alignItems="center">
					<Grid item md={3} lg={2}>
						<div className="d-flex w-100 align-items-center justify-content-evenly">
							<ButtonComponent
								description={<span className={classes.buttonText}>raritry.tools</span>}
								borderRadius="8px"
								padding="0px 10px"
								bgColor="#BE185D"
								border="none"
								height="25px"
								bgcolorHover="rgb(167 18 80)"
							/>
							<a href="https://www.twitter.com" target="_blank">
								<img src={twitter} alt="twitter" className={classes.socialTwitter} />
							</a>

							<a href="https://www.medium.com" target="_blank">
								<img src={medium} alt="twitter" className={classes.socialMedium} />
							</a>
							<a href="https://rarity.tools/" target="_blank" className={classes.ahrefLinks}>
								<span className="w-100">Home</span>
							</a>
						</div>
					</Grid>
					<Grid item lg={6}>
						<Avatars />
					</Grid>
					<Grid item lg={4}>
						<div className="d-flex justify-content-center">
							<a href="#" target="_blank" className={classes.ahrefLinks2}>
								List your Project
							</a>
							<a href="#" target="_blank" className={classes.ahrefLinks2}>
								Advertise
							</a>
							<a href="#" target="_blank" className={classes.ahrefLinks2}>
								Contact Us
							</a>
							<a href="#" target="_blank" className={classes.ahrefLinks2}>
								About
							</a>
							<button />
						</div>
					</Grid>
				</Grid>
			</AppBar>
		</div>
	);
};
export default TopBar;
