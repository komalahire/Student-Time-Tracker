import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import image from "./assest/meraki.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  appBar: {
    backgroundColor: "white", // Set the background color to white
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        sx={{
          background: "background",
          position: "sticky",
        }}
        color="background"
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link style={{textDecoration: 'none'}} to="/">
              <Typography
                style={{ marginTop: "8px", fontWeight: 800, fontSize: "20px" }}
                variant="h4"
                component="div"
                gutterBottom
              >
                {" "}
                Study<span style={{ color: "#ff0089" }}>Tracker</span>
              </Typography>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/dashboard">
              <Typography
                style={{ marginTop: "8px", fontWeight: 800, fontSize: "20px" }}
                variant="h4"
                component="div"
                gutterBottom
              >
                {" "}
                Dashboard
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
