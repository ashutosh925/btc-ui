import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './Styles';
import topbarGif1 from '../../assets/topbarGif1.gif';
import topbarGif2 from '../../assets/topbarGif2.gif';
import topbarGif3 from '../../assets/topicon2.png';
import listLogo from '../../assets/svg-gobbler.svg';
import Hidden from '@material-ui/core/Hidden';
const Avatars = () => {
	const classes = useStyles();

	return (
		<div>
			<div className="d-flex ">
				<a href="#" target="_blank" className={classes.ahrefLinks}>
					<img src={listLogo} alt="list-logo" className={classes.AllCollectionSvg} />
					<span className={classes.allCollection}>All Collections</span>
				</a>
				<Hidden only={[ 'xs' ]}>
					<a href="#" target="_blank" className={classes.ahrefLinks}>
						<span className={classes.allCollection}>Upcoming</span>
					</a>
				</Hidden>

				<Hidden only={[ 'xs', 'sm' ]}>
					<span className={classes.spanNEw}>New!</span>
					<Avatar alt="Remy Sharp" src={topbarGif1} style={{ width: '20px', height: '20px' }} />

					<a href="#" target="_blank" className={classes.ahrefLinks2}>
						<span className={classes.allCollection}>Gator World NFT</span>
					</a>
				</Hidden>
				<Hidden only={[ 'xs', 'sm', 'md' ]}>
					<Avatar alt="Remy Sharp" src={topbarGif2} style={{ width: '20px', height: '20px' }} />

					<a href="#" target="_blank" className={classes.ahrefLinks2}>
						<span className={classes.allCollection}>Infinity Frogs NFT</span>
					</a>
				</Hidden>
				<Hidden only={[ 'xs', 'sm', 'md', 'lg' ]}>
					<Avatar alt="Remy Sharp" src={topbarGif3} style={{ width: '20px', height: '20px' }} />

					<a href="#" target="_blank" className={classes.ahrefLinks2}>
						<span className={classes.allCollection}>BoringStone Genesis Collection</span>
					</a>
				</Hidden>
			</div>
		</div>
	);
};
export default Avatars;
