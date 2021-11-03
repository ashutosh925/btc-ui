import React from 'react';
import { useStyles } from './Styles';


const ModelRightFIlter = (props) => {
	const classes = useStyles();
	let progress = props.headNum.substr(0, props.headNum.lastIndexOf("%")).trim(" ");
	let gradiant = "linear-gradient(to right, #9CA4AF "+progress+"%,yellow "+(100-progress)+"%)";
	return (
		<div>
			<div className="d-flex justify-content-between">
				<span className={classes.scoreHeading}>{props.titleHead}</span>
				{/* <span className={classes.scoreNumbers}>+{props.headNum}</span> */}
			</div>
			<div className={classes.nestListItem} style={{background: gradiant}}>
				<div className={classes.nestedChild1}>
					<p className="text-start ms-1">{props.titleValue}</p>
				</div>
				<div className={classes.nestedChild2}>
					<p>{props.headNum}</p>
				</div>
			</div>
		</div>
	);
};
export default ModelRightFIlter;
