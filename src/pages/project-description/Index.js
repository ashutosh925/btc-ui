import React from 'react';
import { useStyles } from './Styles';
import mainbanner from '../../assets/main-banner.jpg';
import { Grid } from '@material-ui/core';
import midicon1 from '../../assets/mdicon.jpg';
import Avatar from '@material-ui/core/Avatar';
import ButtonComponent from '../../components/Button';
import IndexWarning from './IndexWarning';
import Ranking from './IndexRanking';
import Filter from './IndexFilter';
import Collection from '../project-collection/Index';
import NewsCollections from '../newest-collection/Index';
import TopCollection from '../topcollection/Index';
import ModalCard from '../modal/Model';
const ProjectDescription = () => {
	const classes = useStyles();
	const adImg = 'https://current.images.rarity.tools/samuraidoge_horiz_d';
	return (
		<div className={classes.root}>
			<div className={classes.imgParentDiv}>
				<img src={mainbanner} alt="bannerAlt" className="img-fluid h-75 w-100" />
				<div className="text-center mt-3 mb-3 ">
					<img src={adImg} alt="adbanner" style={{ maxWidth: '100%', maxHeight: '100%' }} />
					<p className="text-muted">Please visit our sponsors!</p>
				</div>
				<ModalCard />
				<div style={{ width: '90%', margin: ' 20px auto' }}>
					<Grid container>
						<Grid item lg={8}>
							<div className="d-flex">
								<Avatar
									alt="Remy Sharp"
									src={midicon1}
									style={{ width: '35px', height: '35px', margin: '10px 10px 0px 0px' }}
								/>
								<h1 className={classes.adHeading}>Primate Social Society Official Ranked by Rarity</h1>
							</div>
						</Grid>
						<Grid item lg={4}>
							<div className="d-flex">
								<ButtonComponent
									description={
										<span>
											View <br />Collection
										</span>
									}
									padding="0px 2px"
									width="100px"
									borderRadius="8px"
									color="#FFFFFF"
									bgColor="#BE185D"
									border="none"
									height="45px"
									bgcolorHover="rgb(167 18 80)"
								/>
								<ButtonComponent
									description={
										<span>
											Explore <br />Traits
										</span>
									}
									padding="0px 2px"
									width="100px"
									borderRadius="8px"
									color="#DB2777"
									bgColor="transparent"
									margin="0px 5px"
									border=" 1px solid #DB2777"
									height="45px"
									bgcolorHover="rgb(241 239 240)"
								/>
								<ButtonComponent
									description="My Wallet"
									padding="0px 2px"
									width="100px"
									borderRadius="8px"
									color="#DB2777"
									bgColor="transparent"
									border=" 1px solid #DB2777"
									height="45px"
									// bgcolorHover="rgb(241 239 240)"
								/>
							</div>
						</Grid>
					</Grid>
					<hr />
					<IndexWarning />
					<Ranking />
					<Filter />
					<Collection />
					<NewsCollections />
					<TopCollection />
				</div>
			</div>
		</div>
	);
};
export default React.memo(ProjectDescription);
