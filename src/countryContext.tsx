import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the country data
interface CountryTypes {
  flags: { svg: string };
  name: { common: string };
  population: number;
  area: number;
  continents: string[];
  independent: boolean;
  unMember: boolean;
}

// Define the context value type
interface CountryContextType {
  countries: CountryTypes[];
  filteredCountries: CountryTypes[];
  sortData: (sortBy: "Name" | "Population" | "Area") => void;
  filterData: (filterBy: string) => void;
  independentCountries: (x: boolean) => void;
  unMemberCountries: (x: boolean) => void;
}

// Create a context for the country data
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Custom hook to access the context
export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}

// CountryProvider component
export default function CountryProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CountryTypes[]>([]);
  const [filteredData, setFilteredData] = useState<CountryTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        setFilteredData(response.data); // Initially, show all countries
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Function to sort data based on the selected criteria
  function sortData(sortBy: "Name" | "Population" | "Area") {
    const sortedData = [...filteredData];
    if (sortBy === "Name") {
      sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortBy === "Population") {
      sortedData.sort((a, b) => b.population - a.population);
    } else if (sortBy === "Area") {
      sortedData.sort((a, b) => b.area - a.area);
    }
    setFilteredData(sortedData); // Update filteredData with sorted data
  }

  // Function to filter countries based on continent
  function filterData(filterBy: string) {
    if (filterBy) {
      const filteredCountries = data.filter((country) =>
        country.continents.some((continent) => continent === filterBy)
      );
      setFilteredData(filteredCountries); // Update the filteredData with the filtered countries
    } else {
      setFilteredData(data); // Reset to original data when no filter is applied
    }
  }

  // Filter countries based on independent status
  function independentCountries(x: boolean) {
    const updatedFilteredData = [...filteredData];
    if (x) {
      setFilteredData(updatedFilteredData.filter((country) => country.independent === true));
    } else {
      setFilteredData(data); // Reset to original data if no independent filter is applied
    }
  }

  // Filter countries based on UN membership
  function unMemberCountries(x: boolean) {
    const updatedFilteredData = [...filteredData];
    if (x) {
      setFilteredData(updatedFilteredData.filter((country) => country.unMember === true));
    } else {
      setFilteredData(data); // Reset to original data if no UN member filter is applied
    }
  }

  return (
    <CountryContext.Provider
      value={{
        countries: data,
        filteredCountries: filteredData,
        sortData,
        filterData,
        independentCountries,
        unMemberCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}