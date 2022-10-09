import React, { useContext } from "react";
import { ReactComponent as Moon } from '../Assets/images/icon-moon.svg';
import { ReactComponent as Sun } from '../Assets/images/icon-sun.svg';
import classes from '../styles/Header.module.css';
import DataContext from "../store/DataContext";

const Header = () => {

    const { darkMode, modeHandler } = useContext(DataContext);

    return (
        <header className={`${darkMode && classes.darkMode}`} >
            <h2>Where in the world?</h2>
            {darkMode ? <Sun onClick={modeHandler} className={`${darkMode && classes.darkMode}`} /> :
                <Moon onClick={modeHandler} className={`${darkMode && classes.darkMode}`} />}
        </header>
    )
}

export default Header;