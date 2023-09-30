import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import image from "./assest/meraki.svg";
import { Image } from "@mui/icons-material";
import { reactLocalStorage } from "reactjs-localstorage";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
  const navigate = useNavigate();
  const classes = useStyles();
  const user = reactLocalStorage.getObject("user");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    reactLocalStorage.remove("user");
    navigate("/login");
  };

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
            <Link style={{ textDecoration: "none" }} to="/">
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
            {Object.keys(user).length > 0 && (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar src={user?.photoURL} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>{user.displayName}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
