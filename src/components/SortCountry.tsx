import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountry } from "@/contexts/countryContext";

const SortCountry: React.FC = () => {
  const { sortData } = useCountry();

  const handleSortChange = (value: string) => {
    sortData(value as "Name" | "Population" | "Area");
  };

  return (
    <div className="px-4 flex flex-col gap-y-2 pt-4 max-w-[400px]">
      <h1 className="text-[#6B717D] text-[10px] desktop:text-[13px]">Sort by</h1>
      <Select onValueChange={handleSortChange}>
        <SelectTrigger className="text-[#BDC1C3] border-[#272B2E] text-[12px] desktop:text-[16px] h-7">
          <SelectValue placeholder="Choose" />
        </SelectTrigger>
        <SelectContent className="desktop:text-[16px]">
          <SelectItem value="Name">Name</SelectItem>
          <SelectItem value="Population">Population</SelectItem>
          <SelectItem value="Area">Area</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCountry;
