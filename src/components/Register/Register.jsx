import React, { useState } from "react";
import "./Register.css";
import config from "../../config";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from '../assets/BackgroundImage.png'
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Register = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    
    const [key, value] = [e.target.name, e.target.value];

    setFormData((nextFormData) => ({...nextFormData, [key]:value}));
  }

  const registerUser = async () => {
    if (!validateInput(formData)) return;
    try {
      setIsLoading(true);
      const data = {
        email: formData.email,
        password: formData.password,
      };

      const response = await axios.post(
        `${config.endpoint}/auth/register`,
        data
      );
      if (response.status === 201) {
        setIsLoading(false)
        setFormData ({
          username: "",
          password: "",
        });
        enqueueSnackbar("User registered successfully", { variant: "success" });
        navigate("/login");
      }
    } catch (error) {
      if (error?.response?.data?.message)
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });

      console.log("Error");
    } finally {
      setIsLoading(false);
    }
  };

  const validateInput = (data) => { 
    if(!data.email) {
       enqueueSnackbar("Email is a required field", {variant: 'warning'});
       return false;
      } 

       if(!data.password) {
         enqueueSnackbar("Password is a required field", {variant: 'warning'});
         return false;
      } 
        return true;
      
      };
  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            value={formData.email}
            onChange={handleInput}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            value={formData.password}
            onChange={handleInput}
          />
          { isLoading ? (
            <Box display="flex" justify-content="center" alignItems="center">
              <CircularProgress size={25} color = "primary" autoHideDuration = {3000} />
            </Box>
          ) : (
           <Button className="button" variant="contained" onClick={() => registerUser(formData)} >
            Register Now
           </Button>
           )}

          <p className="secondary-action">
            Already have an account?{" "}
             <Link to="/login" className="link">
              Login here
             </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
