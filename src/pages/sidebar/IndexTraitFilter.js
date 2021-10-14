import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';

const IndexTraitFilter = (props) => {
	const classes = useStyles();
	return (
		<div>
			<p className={classes.itemFilterHeading} style={{ color: props.color }}>
				Trait Filter
			</p>
			<FormControlLabel
				control={<Checkbox name="checkedA" color="primary" size="small" />}
				label={<span className={classes.checkBoxLabel}>Drill Down Mode</span>}
			/>
			<div className="d-flex w-100 justify-content-center">
				<ButtonComponent
					description="Collapse All"
					padding="0px 5px"
					height="24px"
					color="white"
					border="none"
					bgColor="#BE185D"
					borderRadius="7px"
					margin="0px 5px"
					width="95%"
					bgcolorHover="rgb(167 18 80)"
				/>
				<ButtonComponent
					description="Expand All"
					padding="0px 5px"
					height="24px"
					width="95%"
					color="white"
					border="none"
					bgColor="#BE185D"
					borderRadius="8px"
					margin="0px 5px"
					bgcolorHover="rgb(167 18 80)"
				/>
			</div>
		</div>
	);
};
export default IndexTraitFilter;
