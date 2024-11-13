import Search from "../SVGs/search";
import CountryTable from "./CountryTable";
import SortCountry from "./SortCountry";
import SortRegion from "./SortRegion";
import SortStatus from "./SortStatus";

export default function BigCard(){
    return(
        <div className="flex flex-col  bg-[#1C1D1F] w-full border-y-[1px] border-[#272B2E]">
            <div className="flex items-center p-2">
                <h1 className="text-[#6B717D] text-[14px]">Found 100 countries</h1>
                <div className="flex justify-center items-center bg-[#282A31] rounded-lg p-0.5 ml-auto gap-x-2">
                    <Search></Search>
                    <input className="bg-[#282A31] placeholder:text-[#6B717D] placeholder:text-[11px] pb-1 text-[#6B717D] outline-none" placeholder="Search by Name, Region, Subregion"></input>
                </div>
            </div>

            <SortCountry></SortCountry>
            <SortRegion></SortRegion>
            <SortStatus></SortStatus>
            <CountryTable></CountryTable>
        </div>
    );
}