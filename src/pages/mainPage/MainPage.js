import React from 'react';
import {Container} from "@mui/material";
import classes from "./MainPage.module.css";
import {Instagram} from "@mui/icons-material";
import {Link} from "react-router-dom"

function MainPage(props) {
    return (
        <div>
            <div>
                <p className={classes.text_one}>hello world</p>
                <form>
                    <input type="text"/>
                    <input type="date"/>
                    <button className={classes.btn_form}>click</button>
                </form>

            </div>
        </div>
    );
}

export default MainPage;