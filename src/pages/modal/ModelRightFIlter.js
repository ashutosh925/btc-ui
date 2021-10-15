import React from 'react';
import { useStyles } from './Styles';

const ModelRightFIlter = (props) => {
	const classes = useStyles();
	return (
		<div>
			<div className="d-flex justify-content-between">
				<span className={classes.scoreHeading}>{props.titleHead}</span>
				<span className={classes.scoreNumbers}>+{props.headNum}</span>
			</div>
			<div className={classes.nestListItem}>
				<div className={classes.nestedChild1}>
					<p className="text-start ms-1">123</p>
				</div>
				<div className={classes.nestedChild2}>
					<p>123</p>
				</div>
			</div>
		</div>
	);
};
export default ModelRightFIlter;
