import React, { Fragment, useContext } from "react";
import { Routes, Route} from 'react-router-dom';
import Header from "./Header";
import CountryDetails from "../pages/CountryDetails";
import Home from "../pages/Home";
import classes from '../Assets/styles/Home.module.css';
import DataContext from "../store/DataContext";

const App = () => {

    const { darkMode } = useContext(DataContext);

    const body = document.querySelector("body");

    if (darkMode) {
        body.classList.add(`${classes.darkMode}`);
    } else {
        body.classList.remove(`${classes.darkMode}`);
    }

    return (
            <Fragment>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                        <Route path=":countryName" element={<CountryDetails />} >
                    </Route>
                </Routes>
            </Fragment>
    )
}

export default App;