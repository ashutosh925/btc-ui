import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, IconButton, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import axios from "axios";
const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const Login=()=>{
  const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        showPassword: false,
    })
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const formik = useFormik({
        initialValues: {
          email: 'foobar@example.com',
          password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const handleClickShowPassword = () => {
        setFormData({
          ...formData,
          showPassword: !formData.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
    };

    const handleSubmit = async() =>{
        // console.log('handleSubmit')
      const res = await axios.post("/users/login",formData );
      console.log(res);
      history.push('/');
    }
    return(
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
        >
            <Paper elevation={20}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                <TextField label='Username' placeholder='Enter username' name="email"  fullWidth required onChange={()=>handleChange()}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={()=>handleChange()}/>
                <Button type='submit' color='primary' variant="contained" size="large" name="password" fullWidth onClick={handleSubmit}>Sign in</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login