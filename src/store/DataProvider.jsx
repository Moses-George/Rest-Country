import React, { useEffect, useState } from "react"
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [filteredRegion, setFilteredRegion] = useState('All');
    const [searchQuery, setSearchQuery] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const result = await response.json();
            setData(result);
            setIsLoading(false);
        }
        fetchData();
    }, []);


    useEffect(() => {
        localStorage.setItem("countries", JSON.stringify(data));
    }, [data]);

    const searchResult = data.filter(country => country.name.common.toLowerCase().startsWith(searchQuery));

    const filterRegion = (selectedRegion) => {
        setFilteredRegion(selectedRegion);
    };

    const filteredCountries = data.filter((country) => {
        return country.region === filteredRegion &&
            (searchResult && country.name.common.toLowerCase().startsWith(searchQuery));
    });

    const searchCountry = (param) => {
        setSearchQuery(param);
    };



    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme === "dark") {
            setDarkMode(true);
        }
    }, []);

    const modeHandler = () => {
        setDarkMode(prev => !prev);
        if (!darkMode) {
            localStorage.setItem("theme", 'dark');
        } else {
            localStorage.removeItem("theme");
        }
    }


    const values = {
        data,
        darkMode,
        modeHandler,
        filteredRegion,
        filteredCountries,
        filterRegion,
        searchCountry,
        searchResult,
        loading: isLoading
    }

    return (
        <DataContext.Provider value={values} >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;