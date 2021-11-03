import React, { useContext, useState } from 'react';
import { useStyles } from './Styles';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';

const Price = (props) => {
	const { 0: darkMode } = useContext(ThemeContext);
	const [inputFirst,setInputFirst] = useState(null)
	const [inputSecond, setInputSecond] = useState(null)

	const classes = useStyles();
	return (
		<div>
			<h5 className={classes.price}>{props.description}</h5>
			{props.subHeading ? <h5 className={classes.priceSubHeading}>(Buy Now Only)</h5> : null}
			<div className="d-flex m-auto justify-content-center" style={{ width: '90%' }}>
				<InputComponent
					placeHolder={props.inputPlaceHolderFirst}
					pColor="#EC407A"
					bgColor={darkMode ? '#374151' : 'white'}
					value={inputFirst}
					onChange={(value)=>setInputFirst(value)}
				/>
				<span style={{ fontSize: '20px' }}>-</span>
				<InputComponent
					placeHolder={props.inputPlaceHolderSecond}
					pColor="#EC407A"
					bgColor={darkMode ? '#374151' : 'white'}
					value={inputSecond}
					onChange={(value)=>setInputSecond(value)}
				/>
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
				onClick={()=>props.handlePrice(inputFirst,inputSecond)}
			/>
		</div>
	);
};
export default React.memo(Price);
