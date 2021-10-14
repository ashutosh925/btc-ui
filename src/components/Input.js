import React from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './Styles';

const IndexInput = (props) => {
	const classes = useStyles(props);
	return (
		<div className={classes.inputRoot}>
			<FormControl>
				<input placeholder={props.placeHolder} className={classes.input} />
			</FormControl>
		</div>
	);
};
export default IndexInput;
