import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';

import website from '../../assets/website.svg';
import ig from '../../assets/svg-ig.svg';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/svg-twitter.svg';

const IndexWarning = () => {
	const classes = useStyles();
	return (
		<div>
			<p className={classes.warningMsg}>
				Warning: Rankings for this project will change while items are still being minted or revealed.
			</p>
			<br />
			<p className={classes.descriptionWarning}>Description</p>
			<Grid container>
				<Grid Item lg={6}>
					<p className={classes.descriptionParagraph}>
						The Primate Social Society is a sophisticated collection of Ape avatars. Inspired by our
						Degenerate brothers and sisters in the Defi Space over at ApeSwap. Our beautiful ApeQueen has
						hand-drawn hundreds of layers (2-4 hours a piece) and is programmatically assembling them into
						the final Ape. This is a limited-edition collection that will cap at 10k. The Primate Social
						Society Apes will be used in conjunction with their best friends (Gorillas, Baby Apes and Kitten
						NFT's will be available for free mint to holders at respective roadmap milestones) to be used
						for the upcoming Primate Social Society CryptoRPG. There will also be exclusive offers like
						exclusive merch shop and events to owners of The Primate Social Society NFTs. We plan to
						integrate Primate Social Society into the inevitable metaverses and will be partnering with
						other GameFi projects to bring your ape into their games as PFP and exclusive perks.
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
				<div className="mt-3">
					<Grid item lg={6}>
						<Grid container spacing={4}>
							<Grid item lg={3}>
								<div>
									<h3 className={classes.paraRightSectionH}>7 Day Volume</h3>
									<p className={classes.descriptionParagraph}>0.07 ETH</p>
								</div>
							</Grid>
							<Grid item lg={3}>
								<div>
									<h3 className={classes.paraRightSectionH}>Total Volume</h3>
									<p className={classes.descriptionParagraph}>35.08 ETH</p>
								</div>
							</Grid>
							<Grid item lg={3}>
								<div>
									<h3 className={classes.paraRightSectionH}>7 Day Avg Price</h3>
									<p className={classes.descriptionParagraph}>321.73 ETH</p>
								</div>
							</Grid>
							<Grid item lg={3}>
								<div>
									<h3 className={classes.paraRightSectionH}>owners</h3>
									<p className={classes.descriptionParagraph}>0.07 ETH</p>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Grid>
		</div>
	);
};

export default IndexWarning;
