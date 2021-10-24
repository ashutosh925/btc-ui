
import React from "react"
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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
]

const AddProject = () => {
    const [currency, setCurrency] = React.useState('EUR');
    const [ modalStyle ] = React.useState(getModalStyle);
    const classes = useStyles();
    const handleChange = (event) => {
        setCurrency(event.target.value)
    }
    const [values, setValues] = React.useState({
      shipping: "Cat in the Hat",
      country: "",
      city: "",
      state: "",
      postalCode: "",
      address: ""
    });
    

    return (
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
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <Input accept="image/*" id="contained-button-file" multiple type="file" className={classes.fileUpload}/>
                <Button variant="contained" component="span" fullWidth color="primary">
                  Upload Project Image
                </Button>
                </Grid>
                <Grid item xs={6}>
                <Input accept="image/*" id="contained-button-file" multiple type="file" className={classes.fileUpload}/>
                <Button variant="contained" component="span" fullWidth  color="primary">
                  Upload Project Logo
                </Button>
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Volume"
                  id="volume"
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
                  id="project-description "
                />
              </Grid>
            </Grid>
          </Grid>
          <Button variant="contained" component="span" fullWidth type="large" color="primary">
                  Add Project 
          </Button>
        </Grid>
        );
}
 
export default AddProject;