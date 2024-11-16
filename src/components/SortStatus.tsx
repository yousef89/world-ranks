import { Checkbox } from "@/components/ui/checkbox";
import { useCountry } from "@/countryContext";
import { useState, useEffect } from "react";

export default function SortStatus() {
  const [isIndependent, setIsIndependent] = useState<boolean>(false);
  const [isUn, setIsUn] = useState<boolean>(false);
  const { independentCountries, unMemberCountries } = useCountry();

  // Handle change for "Independent" checkbox
  function handleIndependent() {
    setIsIndependent((prev) => !prev); // Toggle the state on click
  }

  // Handle change for "UN member" checkbox
  function handleUn() {
    setIsUn((prev) => !prev); // Toggle the state on click
  }

  // Trigger filtering when checkbox states change
  useEffect(() => {
    independentCountries(isIndependent); // Call when "Independent" checkbox changes
  }, [isIndependent, independentCountries]);

  useEffect(() => {
    unMemberCountries(isUn); // Call when "UN member" checkbox changes
  }, [isUn, unMemberCountries]);

  return (
    <div className="flex flex-col space-y-2 px-4 pt-5">
      <h1 className="text-[#6B717D] text-[10px]">Status</h1>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="united-nations"
          className="border-gray-400 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white focus:ring-blue-500"
          onClick={handleUn}
          checked={isUn} // Ensure the checkbox reflects the state
        />
        <label
          htmlFor="united-nations"
          className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#BDC1C3]"
        >
          Member of the United Nations
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="independent"
          className="border-gray-400 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white focus:ring-blue-500"
          onClick={handleIndependent}
          checked={isIndependent} // Ensure the checkbox reflects the state
        />
        <label
          htmlFor="independent"
          className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#BDC1C3]"
        >
          Independent
        </label>
      </div>
    </div>
  );
}