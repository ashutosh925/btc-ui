import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import monkey1 from '../../assets/MidContentImages/monkey112.png';
import darktheme from '../../assets/modalbutton.svg';
import filterObject from '../project-collection/ProjectContent';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './Styles';
const MediaCard = (props) => {
	const classes = useStyles();
	const state = useSelector((state) => state.nftReducer);

	// const seprateObject = filterObject.filter((items) => {
	// 	return items.id === 11;
	// });
	const seprateObject = state.currentNFT;
	console.log(state.currentNFT,seprateObject)
	return (
		<Card className={classes.rootCard}>
			<div className="d-flex justify-content-between">
				<p className={classes.cardId}>Rarity Rank #{seprateObject.rank1__by_one_formula}</p>
				{/* <p>
					<a className={classes.cardtop}>
						Owner: <br /> {seprateObject.owner}
					</a>
				</p> */}
			</div>
			<CardActionArea>
				<img src={seprateObject.image} alt="cardimge" className={classes.cardImg} />
			</CardActionArea>
			<div className="d-flex justify-content-between">
				<div className="d-flex flex-column">
					<span className={classes.cardId}>{seprateObject.name_of_nft}</span>
					<span className={classes.cardId}>#12345</span>
				</div>
				<div className="d-flex flex-column">
					<span className="text-muted">ID</span>
					<span className="text-muted">{seprateObject.id}</span>
				</div>
			</div>
			{/* <div className="d-flex justify-content-center">
				<button className={classes.modalButton}>
					<img src={darktheme} alt="starticon" style={{ width: '25px', height: '25px' }} />
					<span className={`${classes.buttnoText} ms-2`}>View on space</span>
				</button>
			</div> */}
		</Card>
	);
};
export default React.memo(MediaCard);
