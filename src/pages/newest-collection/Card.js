import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './Styles';
const MediaCard = (props) => {
	const classes = useStyles(props);

	return (
		<Card className={classes.rootCard}>
			<div className={classes.cardMedia}>
				{/* <img src={props.img} alt="cardimge" className={classes.cardImg} /> */}
			</div>

			<div className="d-flex justify-content-between mt-4 p-2">
				<h1 className={classes.cardHeading}>{props.title}</h1>
				<Avatar
					alt="Remy Sharp"
					variant="circular"
					src={props.icon}
					style={{ width: '50px', height: '50px' }}
				/>
			</div>
			<div>
				<p>
					<a className={classes.cardtop}>{props.subtitle}</a>
					<br />
					<a className={classes.cardtop}>{props.subtitle2}</a>
					<br />
					<a className={classes.cardtop}>{props.subtitle3}</a>
				</p>
			</div>
			<div className="d-flex">
				<p className={classes.cardBttom}>{props.bottomTitle}</p>
			</div>
		</Card>
	);
};
export default React.memo(MediaCard);
