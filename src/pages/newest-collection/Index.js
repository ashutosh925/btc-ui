import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './Styles';
import { DialogContent, Grid , Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import cardContent from './Content';
import cokie from 'js-cookie';
import Card from './Card';
import { ThemeContext } from '../../ThemeContext';
import { listProject } from '../../redux/actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Axios from 'axios';
import { CURRENT_PROJECT } from '../../redux/Types';
import AddProject from '../AddProject/AddProject';

const NewsCollections = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const dispatch = useDispatch();	
	const projectReducer = useSelector((state) =>  state.projectReducer);
	const {loading , projects , error} =projectReducer;

	const [admin, setAdmin] = useState('');
	const modalState = useSelector((state) => state.auth);	
	const readCookie = () => {
	
		const user = cokie.get("user");
	
	if(user){
		setAdmin(true);
	
	}
	};
	const userData = JSON.parse(localStorage.getItem("userInfo"));
	const data =  userData && userData.token;

	const deleteHandel = async(id) => {
	 	await	Axios.delete(`/projects/${id}`, {token:data})
		 dispatch(listProject({}))
	
	
	}
	const editHandel = async(project) => {
		dispatch({ type:"EDIT_PROJECT_MODAL", payload: true });
		dispatch({type:CURRENT_PROJECT , payload:project})
		dispatch(listProject({}))
	}

	useEffect(() => {
		readCookie();
	}, [])
const history = useHistory()
	const handelClick = (card) => {
		dispatch({ type: 'CURRENT_PROJECT', payload: card });
		localStorage.setItem("currentProject" , JSON.stringify(card));
		// console.log(JSON.stringify(card))
		// cokie.set('currentProject' , JSON.stringify(card))
		history.push("/nfts")
	}
	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Newest Collections Added</h1>
			<hr />
			<Grid container={true} className={classes.gridParent}>

				{projects &&
					projects.map((card, idx) => {
						return (
							<div key={idx}>
								<Grid item lg={5}>
								{admin?
								<div>

								<DeleteIcon style={{"cursor":"pointer"}} onClick={() => deleteHandel(card._id)}/>
								<EditIcon style={{"margin-left":"20px" , "cursor":"pointer"}}  onClick={ () =>  editHandel(card)}/>
								</div>
								:''
								}
									<Card
										img={card.project_file}
										bottomTitle={card.project_description}
										title={card.project_name}
										subtitle={card.project_added}
										subtitle2={card.project_owner}
										subtitle3={card.project_volume}
										icon={card.project_logo}

										darkTheme={darkMode}
										onClick={() => handelClick(card , 'Project Modal',true)}
									/>
								</Grid>
							</div>
						);
					})}
			</Grid>
			              <Modal
                    open={modalState.editProjectModal}
                    onClose={() => dispatch({ type:"EDIT_PROJECT_MODAL", payload: false })}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
											<DialogContent>
												<AddProject/>
											</DialogContent>		
										</Modal>
		</div>
	);
};


export default React.memo(NewsCollections);
