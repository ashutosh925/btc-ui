import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './Styles';
import ButtonComponent from '../../components/Button';
import twitter from '../../assets/twitter.png';
import medium from '../../assets/medium.png';
import Hidden from '@material-ui/core/Hidden';
import Avatars from './TopbarAvatars';
import cookie from 'js-cookie';
// import { useHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import darkTheme from '../../assets/darktheme.svg';
import { ThemeContext } from '../../ThemeContext';
import {
	Button,
    Grid,
    Modal,
	Typography,
} from '@material-ui/core';
import AddProject from "../AddProject/AddProject";
import AddProjectNFT from "../AddProjectNFT/AddProjectNFT";
import DialogContent from "@material-ui/core/DialogContent";
import { useDispatch, useSelector } from 'react-redux';

const TopBar = () => {
	const [addProject, setAddProject ] = useState(false);
	const [addProjectNFT, setAddProjectNFT]  = useState(false);
	const [admin, setAdmin] = useState('');
	const state = useSelector((state) => state.auth);	
	const dispatch = useDispatch();		
	const { 0: darkMode, 1: setDarkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const darkchange = () => {
		setDarkMode(!darkMode);
	};
const readCookie = () => {
	
	const user = cookie.get("user");

if(user){
  setAdmin(true);

}
};
// const history = useHistory()
const history = createHistory();
const logout = () => {
	const removeCokie = () => {

		cookie.remove("user")
		history.go(0)
	}
	removeCokie();
}
useEffect(() => {
	readCookie();
}, [])
const handleModal = (type, state) => {
	dispatch({ type: type, payload: state });
}
	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Grid container className={classes.gridParent} alignItems="center">
					<Grid item sm={3} lg={2}>
						<div className="d-flex w-100 align-items-center justify-content-evenly">
							<ButtonComponent
								description={<span className={classes.buttonText}>raritry.tools</span>}
								borderRadius="8px"
								padding="0px 10px"
								bgColor="#BE185D"
								border="none"
								height="25px"
								bgcolorHover="rgb(167 18 80)"
							/>
							<a href="https://www.twitter.com" target="_blank">
								<img src={twitter} alt="twitter" className={classes.socialTwitter} />
							</a>

							<a href="https://www.medium.com" target="_blank">
								<img src={medium} alt="twitter" className={classes.socialMedium} />
							</a>
							<a href="https://rarity.tools/" target="_blank" className={classes.ahrefLinks}>
								<span className="w-100">Home</span>
							</a>
						</div>
					</Grid>
					<Grid sm={7} lg={6}>
						<Avatars />
					</Grid>
					<Grid sm={4} lg={4} >
					{ admin?<div className="d-flex justify-content-end">
							<Hidden>
							<ButtonComponent
								description={<span className={classes.buttonText}>Add Project</span>}
								borderRadius="8px"
								padding="0px 10px"
								bgColor="#BE185D"
								border="none"
								height="25px"
								bgcolorHover="rgb(167 18 80)"
								onClick={()=>handleModal('Project Modal',true)}
								
							/>
							</Hidden>
							<Hidden >
							<ButtonComponent
								description={<span className={classes.buttonText}>Add Project NFT</span>}
								borderRadius="8px"
								padding="0px 10px"
								bgColor="#BE185D"
								border="none"
								height="25px"
								bgcolorHover="rgb(167 18 80)"
								onClick={()=>handleModal('Project NFT Modal',true)}
							/>
							</Hidden>
							<Hidden >
							<ButtonComponent
								description={<span className={classes.buttonText}>Log Out</span>}
								borderRadius="8px"
								padding="0px 10px"
								bgColor="#BE185D"
								border="none"
								height="25px"
								bgcolorHover="rgb(167 18 80)"
								onClick={logout}
							/>
							</Hidden>
						</div>:'' }
						
					</Grid>
				</Grid>
			</AppBar>
			<div>
                {/* Add Project Modal */}
                <Modal
                    open={state.projectModal}
                    onClose={() => handleModal('Project Modal',false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
					<DialogContent>
						<AddProject/>
					</DialogContent>		
				</Modal>

				{/* Add Project NFT Modal */}
                <Modal
                    open={state.projectNFTModal}
                    onClose={()=>handleModal('Project NFT Modal',false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
					<DialogContent>
						<AddProjectNFT/>
					</DialogContent>		
				</Modal>
            </div>
		</div>
	);
};
export default TopBar;
