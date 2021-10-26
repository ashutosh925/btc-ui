import React from 'react'
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
import CloseIcon from '@material-ui/icons/Close'
import Icon from '@material-ui/core/Icon'
import { teal, grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Axios from 'axios'

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
    const [currency, setCurrency] = React.useState('EUR')
    const [modalStyle] = React.useState(getModalStyle)
    const classes = useStyles()
    const handleChange = (event) => {
        setCurrency(event.target.value)
    }
    const [values, setValues] = React.useState({
        shipping: 'Cat in the Hat',
        country: '',
        city: '',
        state: '',
        postalCode: '',
        address: '',
    })

    const submitHandel = (e) => {
        Axios.post("/project_nft" , values)
    }

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
                                Age
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    className={classes.fileUpload}
                                />
                                <Button
                                    variant="contained"
                                    component="span"
                                    fullWidth
                                    color="primary"
                                >
                                    Upload NFT CSV
                                </Button>
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
                Add Project
            </Button>
        </Grid>
    )
}

export default AddProject
