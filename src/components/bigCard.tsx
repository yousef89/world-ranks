import { useState } from "react";
import { useCountry } from "@/contexts/countryContext";
import CountryTable from "./CountryTable";
import PaginationCountry from "./paginationCountry";
import SortCountry from "./SortCountry";
import SortRegion from "./SortRegion";
import SortStatus from "./SortStatus";


export default function BigCard() {
  const { filteredCountries, searchCountries } = useCountry();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get the total number of countries and slice the filteredCountries for pagination
  const totalCountries = filteredCountries.length;
  const currentCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col justify-center bg-[#1C1D1F] w-full border-y-[1px] border-[#272B2E]">
      <div className="flex items-center p-2">
        <h1 className="text-[#6B717D] text-[13px]">
          Found {totalCountries} countries
        </h1>
        <div className="flex justify-center items-center bg-[#282A31] rounded-lg p-0.5 ml-auto gap-x-2">
          <input
            className="bg-[#282A31] placeholder:text-[#6B717D] placeholder:text-[11px] pb-1 text-[#6B717D] outline-none"
            placeholder="Search by Name, Region"
            onChange={(e) => searchCountries(e.target.value)}
          />
        </div>
      </div>

      <SortCountry></SortCountry>
      <SortRegion></SortRegion>
      <SortStatus></SortStatus>
      <CountryTable countries={currentCountries} />

      <div className="flex justify-center">
        <PaginationCountry
          totalItems={totalCountries}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}