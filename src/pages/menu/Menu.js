import React from 'react';
import classes from "./Menu.module.css"
import {Container} from "@mui/material";
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <NavLink to="/" className={classes.link_text}>main page</NavLink>
            <NavLink to="/cart">carts</NavLink>
        </div>
    );
}

export default Menu;