import React, { useContext } from "react";
import DataContext from "../store/DataContext";
import classes from '../Assets/styles/RegionFilter.module.css';

const RegionFilter = () => {

    const { darkMode, filteredRegion, filterRegion } = useContext(DataContext);

    const dropDownChangeHandler = (e) => {
        filterRegion(e.target.value);
    }

    return (
        <div className={`${classes.select} ${darkMode && classes.darkMode}`}>
            <div className={classes.dropDown}>
                <select value={filteredRegion} onChange={dropDownChangeHandler}>
                    <option value="All">Filter by Region</option>
                    <option value='Africa'> Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default RegionFilter;