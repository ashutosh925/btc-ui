import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useStyles } from './Styles';
const MediaCard = (props) => {
	const classes = useStyles(props);

	return (
		<Card className={classes.rootCard}>
			<div className="d-flex justify-content-between">
				<p className={classes.cardId}>#{1 + props.id}</p>
				<p>
					<a className={classes.cardtop}>{props.aHrefs}</a>
				</p>
			</div>
			<CardActionArea>
				<img src={props.img} alt="cardimge" className={classes.cardImg} />
				{/* <CardMedia className={classes.media} image={props.img} title="Contemplative Reptile" /> */}
			</CardActionArea>
			<div className="d-flex">
				<p className={classes.cardBttom}>{props.bottomTitle}</p>
			</div>
		</Card>
	);
};
export default MediaCard;
