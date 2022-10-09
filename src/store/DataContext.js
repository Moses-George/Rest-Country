import React from "react";

const DataContext = React.createContext({
    data: [],
    darkMode: false,
    modeHandler: ()=> {},
    filteredRegion: "All",
    filteredCountries: [],
    filterRegion: (region) => {},
    searchResult: [],
    searchCountry: (param) => {},
    loading: true
});

export default DataContext;