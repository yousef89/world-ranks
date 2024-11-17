import axios from "axios";
import Fuse from "fuse.js";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the country data
export interface CountryTypes {
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
  filterData: (filterBy: string | null) => void;
  independentCountries: (x: boolean) => void;
  unMemberCountries: (x: boolean) => void;
  searchCountries: (searchTerm: string) => void; // Add for search
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}

export default function CountryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<CountryTypes[]>([]);
  const [filteredData, setFilteredData] = useState<CountryTypes[]>([]);
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [independentFilter, setIndependentFilter] = useState<boolean | null>(
    null
  );
  const [unMemberFilter, setUnMemberFilter] = useState<boolean | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Function to apply all active filters and search
  function applyFilters() {
    let updatedData = [...data];

    // Apply region filter
    if (regionFilter) {
      updatedData = updatedData.filter((country) =>
        country.continents.includes(regionFilter)
      );
    }

    // Apply independent filter
    if (independentFilter !== null) {
      updatedData = updatedData.filter(
        (country) => country.independent === independentFilter
      );
    }

    // Apply UN member filter
    if (unMemberFilter !== null) {
      updatedData = updatedData.filter(
        (country) => country.unMember === unMemberFilter
      );
    }

    // Apply search (fuzzy)
    if (searchTerm) {
      const fuse = new Fuse(updatedData, {
        keys: ["name.common" , "continents"], // Add more keys if needed
        threshold: 0.1, // Adjust for strictness
      });
      updatedData = fuse.search(searchTerm).map((result) => result.item);
    }

    setFilteredData(updatedData);
  }

  // Sorting function
  function sortData(sortBy: "Name" | "Population" | "Area") {
    const sortedData = [...filteredData];
    if (sortBy === "Name") {
      sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortBy === "Population") {
      sortedData.sort((a, b) => b.population - a.population);
    } else if (sortBy === "Area") {
      sortedData.sort((a, b) => b.area - a.area);
    }
    setFilteredData(sortedData);
  }

  // Filter by region
  function filterData(filterBy: string | null) {
    setRegionFilter(filterBy);
  }

  // Filter by independent status
  function independentCountries(x: boolean) {
    setIndependentFilter(x ? true : null); // Reset filter when unchecked
  }

  // Filter by UN membership
  function unMemberCountries(x: boolean) {
    setUnMemberFilter(x ? true : null); // Reset filter when unchecked
  }

  // Handle search input changes
  function searchCountries(term: string) {
    setSearchTerm(term);
  }

  // Reapply filters whenever any dependency changes
  useEffect(() => {
    applyFilters();
  }, [regionFilter, independentFilter, unMemberFilter, searchTerm]);

  return (
    <CountryContext.Provider
      value={{
        countries: data,
        filteredCountries: filteredData,
        sortData,
        filterData,
        independentCountries,
        unMemberCountries,
        searchCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}