import React, { useContext, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../Assets/images/Left-Arrow.svg';
import DataContext from "../store/DataContext";
import classes from '../styles/CountryDetails.module.css';


const CountryDetails = () => {

    const [slide, setSlide] = useState(false);

    const { countryName } = useParams();
    const navigate = useNavigate();

    const { data, darkMode } = useContext(DataContext);

    const navigateBack = () => {
        setSlide(true);
        setTimeout(() => {
            navigate(-1);
            setSlide(false);
        }, 200)
    }


    const country = data.find(item => item.name.common.toLocaleLowerCase() === countryName.toLocaleLowerCase());

    const native = Object.keys(country.name.nativeName)[0];
    const nativeName = country.name.nativeName[native].common;

    const currencykey = Object.keys(country.currencies)[0];
    const currency = country.currencies[currencykey].name;

    const languageValues = Object.values(country.languages);
    const languages = languageValues.map((language, index) => <span key={index}>{language}, </span>);

    const population = (country.population.toString().split(".")[0] = 
    country.population.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    const capitals = country.capital.map((capital, index) => <span key={index}>{capital}, </span>);

    const hasBorders = Object.keys(country).includes("borders");

    const navigateToBorderCountry = (border) => {
        const borderCountry = data.find(country => country.cca3 === border);
        navigate(`/${borderCountry.name.common}`);
    }


    return (
        <summary className={`${classes.summary} ${slide && classes.back}`}>
            <button className={`${darkMode ? classes.darkMode : classes.lightMode}`} onClick={navigateBack}>
                <Arrow />Back</button>
            <div className={classes['details-container']}>
                <img src={country.flags.png} alt="" />
                <div className={classes['country-details']}>
                    <div className={classes.details}>
                        <div className={classes['details-left']}>
                            <h2>{country.name.common}</h2>
                            <p><strong>Native Name: </strong>{nativeName}</p>
                            <p><strong>Population: </strong>{population}</p>
                            <p><strong>Region: </strong>{country.region}</p>
                            <p><strong>Sub Region: </strong>{country.subregion}</p>
                            <p><strong>Capital : </strong>{capitals}</p>
                        </div>
                        <div className={classes['details-right']}>
                            <p><strong>Timezone: </strong>{country.timezones[0]}</p>
                            <p><strong>Currencies: </strong>{currency}</p>
                            <p><strong>Languages: </strong>{languages}</p>
                        </div>
                    </div>
                    {hasBorders && <div className={classes.border}>
                        <strong>Border Countries:</strong>
                        <div className={classes.borders}>
                            {country.borders.map((border, index) =>
                                <div key={index} className={classes.borderCountry}
                                    onClick={() => navigateToBorderCountry(border)} >{border}</div>)}
                        </div>
                    </div>}
                </div>
            </div>
        </summary>
    )
}

export default CountryDetails;