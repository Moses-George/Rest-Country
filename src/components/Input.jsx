import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Search } from "../Assets/images/Search.svg";
import DataContext from "../store/DataContext";
import classes from '../styles/Input.module.css';

const Input = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const { darkMode, searchCountry } = useContext(DataContext);

    const changeHandler = (e) => {
        setSearchQuery(e.target.value);
    }



    useEffect(() => {
        searchCountry(searchQuery.toLocaleLowerCase());
    }, [searchQuery, searchCountry]);

    const submitHandler = (e) => {
        e.preventDefault();
        searchCountry(searchQuery);
    }

    return (
        <form className={`${darkMode && classes.darkMode}`} onSubmit={submitHandler} >
            <div className={classes.searchBar}>
                <button >
                    <Search />
                </button>
                <input
                    onChange={changeHandler}
                    type="search"
                    placeholder="Search for a country..."
                    value={searchQuery}
                />
            </div>
        </form>
    )
}

export default Input;