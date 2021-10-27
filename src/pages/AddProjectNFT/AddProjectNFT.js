import React, {useEffect} from 'react'
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
    Input,
    InputLabel,
    Select,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close'
import Icon from '@material-ui/core/Icon'
import { teal, grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { listProject } from '../../redux/actions/projectActions'
import CSVReader from "react-csv-reader";

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles((theme) => ({
    fileUpload: {
        display: 'none',
    },
    paper: {
        position: 'absolute',
        overflowY: 'auto !important',
        height: '30vh',
        width: '30%',
        [theme.breakpoints.down('800')]: {
            width: 'auto',
        },
        backgroundColor: theme.palette.background.paper,
        border: '3px solid #DB2777',
        outline: 'none',
        borderRadius: '7px',
        padding: theme.spacing(3, 4, 3),
    },
}))


const AddProject = () => {
    const projectReducer = useSelector((state) =>  state.projectReducer);
	const {loading , projects , error} = projectReducer;
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles(); 
    const dispatch = useDispatch();	
    const [form, setForm] = React.useState({
        'project_name': '',
        'project_nft': '',
    })
    
    useEffect(() => {
        dispatch(listProject({}))   
    }, [dispatch])
    
    const submitHandel = (e) => {
        Axios.post("/project_nft" , form)
        dispatch({ type: 'Project NFT Modal', payload: false });
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form, [name]:value
        })
    }

    const handleForce = (data, fileInfo) => setForm({
        ...form,
        'project_nft':data
    });

    const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    return (
        <Grid container style={modalStyle} className={classes.paper}>
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    className={classes.mainHeader}
                    style={{ marginBottom: '2%' }}
                >
                    <Grid item xs={12}>
                        <Typography
                            className={classes.primaryColor}
                            variant="h5"
                        >
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Project Name
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={form.project_name}
                                label="Project Name"
                                onChange={handleChange}
                                name="project_name"
                            >
                              {
                                  projects && projects.map(project=>(
                                  <MenuItem value={project.project_name} key={project.project_id}>{project.project_name}</MenuItem>
                                  ))
                              }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <CSVReader
                            cssClass="react-csv-input"
                            label="Upload NFT csv"
                            onFileLoaded={handleForce}
                            parserOptions={papaparseOptions}
                            />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                component="span"
                fullWidth
                type="large"
                color="primary"
                onClick={submitHandel}
            >
                Add Project NFT
            </Button>
        </Grid>
    )
}

export default AddProject
