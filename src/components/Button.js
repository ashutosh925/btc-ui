import React from 'react';
import { useStyles } from './Styles';

const Button = (props) => {
	const classes = useStyles(props);
	return (
		<div>
			<button className={classes.button} onClick={()=>props.onClick()}>{props.description}</button>
		</div>
	);
};
export default Button;
