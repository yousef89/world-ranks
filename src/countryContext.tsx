import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the country data
interface CoutnryTypes {
  flags: { svg: string };
  name: { common: string };
  population: number;
  area: number;
}

// Create a context for the country data
const CountryContext = createContext<CoutnryTypes[] | undefined>(undefined);

// Custom hook to access the context
export function useCountry() {
  const context = useContext(CountryContext);
  return context;
}

// CountryProvider component
export default function CountryProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CoutnryTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <CountryContext.Provider value={data}>
      {children}
    </CountryContext.Provider>
  );
}