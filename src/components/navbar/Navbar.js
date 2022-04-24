import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { debounce } from "lodash";
import { useElementsHeightsContext } from "../../contexts/ElementsHeightsContext";

const Navbar = () => {
  const { appBarHeight, setState } = useElementsHeightsContext();
  const [scrollNav, setScrollNav] = useState(false);
  const ref = useRef();

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  const updateNavbarHeight = () => {
    setState(prev => { return { ...prev.state, appBarHeight: ref?.current.clientHeight } });
  }

  const updateNavbarHeightDebounced = debounce(updateNavbarHeight, 100);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.addEventListener("resize", updateNavbarHeightDebounced);

    // return (() => {
    //   window.removeEventListener("scroll");
    //   window.removeEventListener("resize");
    // }, [])
  }, []);

  useEffect(() => {
    updateNavbarHeight();
  }, [ref])


  return (
    <Box sx={{ flexGrow: 1 }} ref={ref}>
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
                useRef
              </NavLink>
            </li>
            <li>
              <NavLink to="/context" activeClassName="active">
                context
              </NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
