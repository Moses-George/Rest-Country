import React, { Fragment, useContext } from "react";
import Input from "../components/Input";
import RegionFilter from "../components/RegionFilter";
import classes from '../Assets/styles/Home.module.css';
import DataContext from "../store/DataContext";
import Countries from "../components/Countries";
import Spinner from '../components/UI/Spinner';

const Home = () => {

    const { filteredRegion, filteredCountries, searchResult, loading } = useContext(DataContext);

    return (
        <Fragment>
            <div className={classes['header-input']}>
                <Input />
                <RegionFilter />
            </div>
            <div className={classes.loader}>
                {loading && <Spinner />}
            </div>
            <Countries />
            {!loading && (searchResult.length === 0 || (filteredRegion !== "All" && filteredCountries.length === 0))
                && <p className={classes.noResult}>No Result Found.</p>}
        </Fragment>
    )
}

export default Home;