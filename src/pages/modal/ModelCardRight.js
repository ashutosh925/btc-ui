import React, { useContext, useState, useCallback } from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';
import ModelRightFIlter from './ModelRightFIlter';
import { details, details2, details3 } from './Contents';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const ModelCardRight = () => {
	const classes = useStyles();
	const { 0: darkMode } = useContext(ThemeContext);
	const [ componentItems, setComponentItems ] = useState(details);
	const [ ahrefs, setAhrefs ] = useState({
		first: true,
		second: false,
		third: false
	});

	const firstAhref = useCallback(
		(e) => {
			setAhrefs({
				...ahrefs,
				first: true,
				second: false,
				third: false
			});
			e.preventDefault();
			setComponentItems(details);
		},
		[ ahrefs ]
	);

	const secondAhref = useCallback(
		(e) => {
			setAhrefs({
				...ahrefs,
				first: false,
				second: true,
				third: false
			});
			e.preventDefault();
			setComponentItems(details2);
		},
		[ ahrefs ]
	);

	const thirdAhref = useCallback(
		(e) => {
			setAhrefs({
				...ahrefs,
				first: false,
				second: false,
				third: true
			});
			setComponentItems(details3);

			e.preventDefault();
		},
		[ ahrefs ]
	);

	return (
		<div className={classes.cardRightroot}>
			<div className={classes.rarityHead}>
				<h5>Rarity Score</h5>
				<p className={classes.rarituInsideValue}>21312312</p>
				<span>rarity.tools experimental</span>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<ButtonComponent
					description={<span style={{ fontSize: '14px' }}>Sorted Traits</span>}
					padding="0px 5px"
					height="27px"
					borderRadius="6px"
					color="#FFFFFF"
					bgColor="#BE185D"
					border="none"
					bgcolorHover="rgb(167 18 80)"
				/>
				<div className="ms-1">
					<ButtonComponent
						description={<span style={{ fontSize: '14px' }}>By Category</span>}
						padding="0px 5px"
						borderRadius="6px"
						height="27px"
						color={darkMode ? '#FFFFFF' : '#BE185D'}
						bgColor={darkMode ? '#6B7280' : 'transparent'}
						border="1px solid #BE185D "
						bgcolorHover={darkMode ? '#6B7280' : 'rgb(241 239 240)'}
					/>
				</div>
			</div>

			<div className="mt-2 mb-2">
				<a href="#" className={ahrefs.first ? classes.ahrefTrue : classes.ahrefFalse} onClick={firstAhref}>
					Rarity Score
				</a>
				<a href="#" className={ahrefs.second ? classes.ahrefTrue : classes.ahrefFalse} onClick={secondAhref}>
					Highest Floor Price
				</a>
				<a href="#" className={ahrefs.third ? classes.ahrefTrue : classes.ahrefFalse} onClick={thirdAhref}>
					Name
				</a>
			</div>

			<div>
				{componentItems &&
					componentItems.map((contents, idx) => {
						return (
							<div key={idx}>
								<ModelRightFIlter titleHead={contents.headTitle} headNum={contents.items} />
							</div>
						);
					})}
			</div>
			<FormControlLabel control={<Checkbox name="jason" color="primary" />} label="Show Nones" />
		</div>
	);
};

export default ModelCardRight;
