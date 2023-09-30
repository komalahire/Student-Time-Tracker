import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { Button, Typography, Container } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import { reactLocalStorage } from "reactjs-localstorage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
        reactLocalStorage.setObject("user", user);
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    const user = reactLocalStorage.getObject("user");
    if (Object.keys(user).length) {
      navigate("/");
    }
  }, []);

  return (
    <div style={{ marginTop: "10%" }}>
      <Container style={{ textAlign: "center", height: "47px" }} maxWidth="sm">
        {/* <h1>Login</h1> */}
        <Typography
          style={{ marginTop: "8px", fontWeight: 800, fontSize: "20px" }}
          variant="h4"
          component="div"
          gutterBottom
        >
          {" "}
          Study<span style={{ color: "#ff0089" }}>Tracker</span>
        </Typography>
        <Typography
          style={{ marginTop: "10px", fontSize: "32px", fontWeight: "bold" }}
          variant="body2"
          color="text.secondary"
        >
          😊 Les't get Started
        </Typography>
        <Typography
          style={{ marginTop: "23px", fontSize: "17px" }}
          gutterBottom
        >
          StudyTrackr is your all-in-one companion for monitoring and enhancing
          your learning journey.
        </Typography>
        {/* <button onClick={handleGoogleLogin}>Login with Google</button> */}
        <Button
          className="google_button"
          style={{
            marginTop: "23px",
            fontSize: "15px",
            backgroundColor: "#ff0089",
            color: "white",
            width: "70%",
            boxShadow: "none",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          variant="contained"
          // color="Primary"
        >
          Login with Google
        </Button>
      </Container>
    </div>
  );
};

export default Login;
