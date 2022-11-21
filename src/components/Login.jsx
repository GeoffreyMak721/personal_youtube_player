import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { signInWithGoogle, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./";
import logo from "../images/logo.png";
const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        {loading ? (
          <Loader />
        ) : (
          <Stack
            justifyContent="center"
            alignItems="center"
            direction={"column"}
            spacing={4}
          >
            <Box
              onClick={signInWithGoogle}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img src={logo} alt="logo" height={60} />
            </Box>
            <Typography sx={{ color: "white" }} variant="caption">
              Clicker sur l’icône pour vous connecter
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Login;
