import React from 'react';
import FormControl from '@material-ui/core/FormControl';
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
