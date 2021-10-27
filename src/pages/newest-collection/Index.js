import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './Styles';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import cardContent from './Content';
import cokie from 'js-cookie';
import Card from './Card';
import { ThemeContext } from '../../ThemeContext';
import { listProject } from '../../redux/actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

const NewsCollections = () => {
	const { 0: darkMode } = useContext(ThemeContext);
	const classes = useStyles();
	const dispatch = useDispatch();	
	const projectReducer = useSelector((state) =>  state.projectReducer);
	const {loading , projects , error} =projectReducer;
	const [admin, setAdmin] = useState('');

	const readCookie = () => {
	
		const user = cokie.get("user");
	
	if(user){
		setAdmin(true);
	
	}
	};
	const data = JSON.parse(localStorage.getItem("userInfo")).token ;
	// console.log(data);
	const deleteHandel = async(id) => {
		await	Axios.delete("project/delete", {id , token:data})
		console.log(id);
	}
	const editHandel = async(id) => {

		await	Axios.patch("", {id})
	}
	useEffect(() => {
		readCookie();
	}, [])

	const handelClick = (card) => {
		dispatch({ type: 'CURRENT_PROJECT', payload: card });
		history.pushState("/nfts")
	}
	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Newest Collections Added</h1>
			<hr />
			<Grid container className={classes.gridParent}>

				{projects &&
					projects.map((card, idx) => {
						return (
							<div key={idx}>
								<Grid item lg={5}>
								{admin?
								<div>

								<DeleteIcon style={{"cursor":"pointer"}} onClick={() => deleteHandel(card._id)}/>
								<EditIcon style={{"margin-left":"20px" , "cursor":"pointer"}}  onClick={ () =>  editHandel(card._id)}/>
								</div>
								:''
								}
									<Card
										img={card.project_file}
										bottomTitle={card.project_description}
										title={card.project_name}
										subtitle={card.project_added}
										subtitle2={card.project_owner}
										// subtitle3={card.subtitle3}
										icon={card.project_logo}
										darkTheme={darkMode}
										onClick={() => handelClick(card)}
									/>
								</Grid>
							</div>
						);
					})}
			</Grid>
			
		</div>
	);
};


export default React.memo(NewsCollections);
