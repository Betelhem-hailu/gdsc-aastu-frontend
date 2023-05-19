import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredBy, setFilteredBy] = useState('All');
  const handleSearch = (locations) => {
    let filtered = searchQuery.length > 0 ? locations.filter(location => {
      return location.title.toLowerCase().includes(searchQuery.toLowerCase());
    }): locations;
    filtered = filteredBy != 'All' ? filtered.filter(location => {
        return location.temperature_type == filteredBy;
    }) : filtered;
    setFilteredLocations(filtered);
  };
  useEffect(()=>{
    handleSearch(filteredLocations)
  }, [searchQuery])
  return (
    <SearchContext.Provider value={{ searchQuery, filteredLocations, handleSearch, setFilteredBy, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};