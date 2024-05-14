
import config from '../../config';
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");

    const handleInput = (event) => {
        setEmail(event.target.value);
    };

    const resetLink = async() => {
        if(email.length === "" ){
            return;
        }
        try{
setIsLoading(true);
const res = await axios.post(`${config.endpoint}/auth/forgot-password`);

if(res.status === 200){
    setIsLoading(false);
    setEmail("");
    enqueueSnackbar("Link Sent", { variant: "success" });
}
        } catch(error){
            if (error?.response?.data?.message)
                enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
        
              console.log("Error");
            } finally {
              setIsLoading(false);
            }
        }
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    minHeight="100vh"
  >
    <Box className="content">
      <Stack spacing={2} className="form">
        <h2 className="title" style={{display:'flex', justifyContent:'center'}}>Did you forget your password?</h2>
        <h4 style={{color:'#655A5A',display:'flex', justifyContent:'center'}}>Enter your email address and we will send a link to restore password</h4>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          title="email"
          name="email"
          placeholder="Enter Email"
          fullWidth
          onChange={handleInput}
          value={email}
        />
        

        {isLoading ? (
          <Box display="flex" justify-content="center" alignItems="center">
            <CircularProgress size={25} color="primary" />
          </Box>
        ) : (
          <Button
            className="button"
            variant="contained"
            onClick={()=>resetLink()}
          >
            Request Reset Link
          </Button>
        )}
        <p
          className="forgot"
          style={{
            color: "#A08CB1",
            cursor:'pointer',
            display: "flex",
            justifyContent: "center",
          }}
          onClick={()=>navigate('/login')}
        >
          Back to Login
        </p>
      </Stack>
    </Box>
  </Box>
  )
}

export default ForgotPassword
