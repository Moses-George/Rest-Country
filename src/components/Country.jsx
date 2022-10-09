import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import classes from '../Assets/styles/Country.module.css';

const Country = ({ name, population, region, capital, flag }) => {

    const navigate = useNavigate();

    const Population = (population.toString().split(".")[0] = 
    population.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    return (
        <Fragment>
            <div className={classes.country} onClick={() => navigate(name)} >
                <img src={flag} alt="" />
                <div className={classes.details}>
                    <h2>{name}</h2>
                    <p> <strong>Population: </strong>{Population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital: </strong>{capital}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Country;