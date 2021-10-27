import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';

import website from '../../assets/website.svg';
import ig from '../../assets/svg-ig.svg';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/svg-twitter.svg';
import { useSelector } from 'react-redux';

const IndexWarning = () => {
	const state = useSelector((state) => state.nftReducer);

	const classes = useStyles();
	return (
		<div>
			<p className={classes.warningMsg}>
				Warning: Rankings for this project will change while items are still being minted or revealed.
			</p>
			<br />
			<p className={classes.descriptionWarning}>Description</p>
			<Grid container spacing={2}>
				<Grid item lg={8}>
					<p className={classes.descriptionParagraph}>
					{state.currentProject && state.currentProject.project_description}
					</p>
					<div className="d-flex">
						<span>
							<img src={website} alt="fb" className={classes.socialIcons} />
							<a href="#" target="_blank" className={classes.socialAHrefs}>
								Website
							</a>
						</span>
						<span>
							<img src={ig} alt="fb" className={classes.socialIcons} />
							<a href="#" target="_blank" className={classes.socialAHrefs}>
								Instagram
							</a>
						</span>
						<span>
							<img src={twitter} alt="fb" className={classes.socialIcons} />
							<a href="#" target="_blank" className={classes.socialAHrefs}>
								Twitter
							</a>
						</span>
						<span>
							<img src={discord} alt="fb" className={classes.socialIcons} />
							<a href="#" target="_blank" className={classes.socialAHrefs}>
								Discord
							</a>
						</span>
					</div>
					<div />
				</Grid>
				<Grid item lg={4}>
					<div className=" d-flex justify-content-between ">
						<div>
							{/* <h3 className={classes.paraRightSectionH}>7 Day Volume</h3>
							<p className={classes.descriptionParagraph}>0.07 ETH</p> */}
						</div>

						<div>
							<h3 className={classes.paraRightSectionH}>Total Volume</h3>
							<p className={classes.descriptionParagraph}>35.08 ETH</p>
						</div>

						<div>
							{/* <h3 className={classes.paraRightSectionH}>7 Day Avg Price</h3>
							<p className={classes.descriptionParagraph}>321.73 ETH</p> */}
						</div>

						<div>
							<h3 className={classes.paraRightSectionH}>owners</h3>
							<p className={classes.descriptionParagraph}>{state.currentProject && state.currentProject.project_owner}</p>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default React.memo(IndexWarning);
