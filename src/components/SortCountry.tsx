import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortCountry: React.FC = () => {
  return (
    <div className="px-4 flex flex-col gap-y-2 pt-4">
        <h1 className="text-[#6B717D] text-[10px]">Sort by</h1>
      <Select>
        <SelectTrigger className="text-[#BDC1C3] border-[#272B2E] text-[12px] h-7">
          <SelectValue placeholder="Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Name">Name</SelectItem>
          <SelectItem value="Population">Population</SelectItem>
          <SelectItem value="Area">Area</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCountry;
