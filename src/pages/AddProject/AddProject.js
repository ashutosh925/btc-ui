
import React, { useState } from "react"
import {
    FormControl,
    Grid,
    Box,
    TextField,
    MenuItem,
    Modal,
    Typography,
    Divider,
    IconButton,
    Input
} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Icon from "@material-ui/core/Icon";
import { teal, grey } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Axios from "axios";
import { useHistory } from 'react-router';
import { listProject } from "../../redux/actions/projectActions";
function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
  fileUpload: {
    display: 'none',
  },
	paper: {
		position: 'absolute',
		overflowY: 'auto !important',
		height: '70vh',
		width: '50%',
		[theme.breakpoints.down('800')]: {
			width: 'auto'
		},
		backgroundColor: theme.palette.background.paper,
		border: '3px solid #DB2777',
		outline: 'none',
		borderRadius: '7px',
		padding: theme.spacing(3, 4, 3)
	}
}));

const AddProject = () => {
  const dispatch = useDispatch();	
    const [ modalStyle ] = React.useState(getModalStyle);
    const classes = useStyles();
    const [formData, setFormData] = useState({
      project_name:"", project_file:"" , project_logo:"" , project_owner:"",
      project_volume:"" , project_description:"" 
    })
    let name , value
    const handelInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

      setFormData({...formData , [name]:value })
   
    }
    const submiHandel = async(e) => {
      e.preventDefault();
      Axios.post("/projects" , formData)
      dispatch({ type: 'Project Modal', payload: false });
      dispatch(listProject({}))
    }

    return (
      <>
        <Grid container style={modalStyle} className={classes.paper}>
        
          <Grid item xs={12}>
            <Grid container direction="row" className={classes.mainHeader} style={{marginBottom: '2%'}}>
              <Grid item xs={12}>
                <Typography className={classes.primaryColor} variant="h5">
                 Add Project
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.mainContent}
              spacing={1}
            >
            
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Project Name"
                  id="project_name"
                  name="project_name"  
                  value={formData.project_name}
                  onChange={handelInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Project File Url"
                  id="project_file"
                  name="project_file" 
                  value={formData.project_file}
                  onChange={handelInputs}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Project logo Url"
                  id="project_logo"
                  name="project_logo" 
                  value={formData.project_logo}
                  onChange={handelInputs}
                />
                </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Project Owner"
                  id="owners"
                  name="project_owner" 
                  value={formData.project_owner}
                  onChange={handelInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Volume"
                  id="volume"
                  name="project_volume" 
                  value={formData.project_volume}
                  onChange={handelInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="Project Description"
                  id="project_description "
                  name="project_description" 
                  value={formData.project_description}
                  onChange={handelInputs}
     
                />
               </Grid>
              </Grid>
                <Button type='submit' onClick={submiHandel} color='primary' variant="contained" size="large" name="password" fullWidth >Sign in</Button>
          </Grid>
         
        </Grid>

        </>
        );
}
 
export default AddProject;