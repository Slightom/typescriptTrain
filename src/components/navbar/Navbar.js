import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ul>
            <li>
              <NavLink to="/todoitems" activeClassName="active">
                ToDoItems
              </NavLink>
            </li>
            <li>
              <NavLink to="/useform" activeClassName="active">
                useForm
              </NavLink>
            </li>
            <li>
              <NavLink to="/mui" activeClassName="active">
                mui
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter" activeClassName="active">
                counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/useref" activeClassName="active">
                counter
              </NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
