import React, { useContext } from "react";
import DataContext from "../store/DataContext";
import Country from "./Country";
import classes from '../styles/Countries.module.css';

const Countries = () => {

    const { filteredRegion, filteredCountries, searchResult, data } = useContext(DataContext);

    return (
        <div className={classes.countries}>
            {(filteredRegion === "All" ? searchResult ? searchResult : data : filteredCountries)
                .map((country, index) => <Country
                    key={Math.random().toString()}
                    id={country.name.common}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}

                />)}
        </div>
    )
}

export default Countries;