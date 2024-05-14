import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import config from "../../config";
import "./Login.css";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((nextFormData) => ({ ...nextFormData, [key]: value }));
  };

  const login = async () => {
    if (!validateInput(formData)) return;

    setLoading(true);
    try {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      const response = await axios.post(`${config.endpoint}/auth/login`, data);
      //console.log(response);

      if (response.status === 200) {
        enqueueSnackbar("User logged in successfully", { variant: "success" });
        localStorage.setItem("token", response?.data?.token);
        navigate("/");
        formData({
          email: "",
          password: "",
        });
      }
    } catch (err) {
      setLoading(false);

      if (err.response && err.response.status === 400) {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
      }
    }
  };

  const validateInput = (data) => {
    if (!data.email) {
      enqueueSnackbar("Email is a required field", { variant: "error" });
      return false;
    }
    if (!data.password) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
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
          <h2 className="title">Login</h2>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            onChange={handleInput}
            value={formData.email}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            onChange={handleInput}
            value={formData.password}
          />

          {loading ? (
            <Box display="flex" justify-content="center" alignItems="center">
              <CircularProgress size={25} color="primary" />
            </Box>
          ) : (
            <Button
              className="button"
              variant="contained"
              onClick={() => login(formData)}
            >
              LOGIN
            </Button>
          )}
          <p
            className="forgot"
            style={{
              color: "#A08CB1",
              cursor:'pointer',
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={()=>navigate('/forgot-password')}
          >
            Forgot Password?
          </p>
          <p className="secondary-action">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register Now
            </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
