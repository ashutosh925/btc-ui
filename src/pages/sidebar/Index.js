import React, { useState, useContext } from 'react';
import { useStyles } from './Styles';
import SelectDropDown from './IndexSelect';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeContext } from '../../ThemeContext';
import Hidden from '@material-ui/core/Hidden';
import { HideContentMd } from './HideContentMd';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'lodash';

const Sidebar = (props) => {
	const dispatch = useDispatch();
	const nftReducer = useSelector((state) =>  state.nftReducer);
	const [ showFilters, setFilters ] = useState(false);
	const [LookUpMessage, setLookUpMessage] = useState(null);
	const [id, setId] = useState("");
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles(props);
	const themeLight = createTheme({
		palette: {
			background: {
				default: darkMode ? '#1F2937' : '#FFFFFF'
			}
		}
	});
	const filterToggle = () => {
		setFilters(!showFilters);

	};
	const modalopen = (id) => {
        const nfts = nftReducer.nfts[0].project_nft
		const currentNFT = nfts.find((element) => element.id === parseInt(id));
		const setLookUpMessage = "NFT not found with enterd ID";
		if(currentNFT){
			dispatch({
				type: 'CURRENT_NFT',
				payload: currentNFT,
			})
			dispatch({ type: 'MODAL OPEN', payload: true })
		} 
    }
	return (
		<ThemeProvider theme={themeLight}>
			<CssBaseline>
				<div className={classes.root}>
					<h1 className={classes.headingProject}>Project</h1>

					<SelectDropDown />
					<div className="d-flex w-100 p-3 justify-content-center">
						<InputComponent
							placeHolder="ID.."
							width="46%"
							bgColor={darkMode ? '#374151' : 'white'}
							// pColor="#EC407A"
							value={id}
							valueColor={darkMode ? '#D1D5DB' : 'black'}
							onChange={(value)=>setId(value)}
						/>
						<ButtonComponent
							description="Look up"
							padding="0px 7px"
							width="90px"
							borderRadius="8px"
							color="white"
							bgColor="#BE185D"
							border="none"
							height="27px"
							bgcolorHover="rgb(167 18 80)"
							onClick={()=>{modalopen(id)}}
						/>
						{LookUpMessage && <p>{LookUpMessage}</p>}
					</div>

					<Hidden only={[ 'xs', 'sm', 'md' ]}>
						<HideContentMd />
					</Hidden>

					<Hidden only={[ 'lg', 'xl' ]}>
						<div onClick={filterToggle}>
							<ButtonComponent
								description="Show Filters"
								padding="0px 4px"
								width="120px"
								borderRadius="8px"
								color="white"
								bgColor="#BE185D"
								border="none"
								height="27px"
								bgcolorHover="rgb(167 18 80)"
								onClick={()=>console.log('Normalization')}
							/>
						</div>
					</Hidden>
					{showFilters ? <HideContentMd /> : null}
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
};
export default React.memo(Sidebar);
