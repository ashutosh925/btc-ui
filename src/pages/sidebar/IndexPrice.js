import React from 'react';
import { useStyles } from './Styles';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/Button';

const Price = (props) => {
	const classes = useStyles();
	return (
		<div>
			<h5 className={classes.price}>{props.description}</h5>
			{props.priceSubHeading ? <h5 className={classes.priceSubHeading}>(Buy Now Only)</h5> : null}
			<div className="d-flex m-auto justify-content-center" style={{ width: '90%' }}>
				<InputComponent placeHolder={props.inputPlaceHolderFirst} />
				<span style={{ fontSize: '20px' }}>-</span>
				<InputComponent placeHolder={props.inputPlaceHolderSecond} />
			</div>
			<ButtonComponent
				description="Apply"
				padding="0px 4px"
				color="white"
				height="26px"
				border="none"
				bgColor="#BE185D"
				borderRadius="7px"
				margin="2px auto 20px auto"
				width="80%"
				bgcolorHover="rgb(167 18 80)"
			/>
		</div>
	);
};
export default Price;
