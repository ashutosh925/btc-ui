import React, { useContext } from 'react';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';
import { ThemeContext } from '../../ThemeContext';

const IndexItemFilter = (props) => {
	const { 0: darkMode } = useContext(ThemeContext);

	const classes = useStyles();

	return (
		<div>
			<div className={classes.itemFilter}>
				<p className={classes.itemFilterHeading} style={{ color: props.color }}>
					Item Filters
				</p>
				<p className={classes.listingType}>Listing Type</p>
				<div className="d-flex m-2 justify-content-center">
					<ButtonComponent
						description="Buy Now"
						padding="1px 4px"
						width="80px"
						margin="0px 7px"
						color={darkMode ? '#FFFFFF' : '#BE185D'}
						border="1px solid #525252 "
						borderRadius="7px"
						bgColor={darkMode ? '#6B7280' : 'transparent'}
						bgcolorHover={darkMode ? 'none' : 'rgb(241 239 240)'}
					/>
					<ButtonComponent
						description="Auction"
						padding="1px 4px"
						margin="0px 7px"
						width="80px"
						color={darkMode ? '#FFFFFF' : '#BE185D'}
						bgColor={darkMode ? '#6B7280' : 'transparent'}
						border="1px solid #525252 "
						borderRadius="7px"
						bgcolorHover={darkMode ? 'none' : 'rgb(241 239 240)'}
					/>
				</div>
			</div>
		</div>
	);
};
export default React.memo(IndexItemFilter);
