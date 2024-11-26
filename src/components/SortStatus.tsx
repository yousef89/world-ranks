import { Checkbox } from "@/components/ui/checkbox";
import { useCountry } from "@/contexts/countryContext";
import { useState } from "react";

export default function SortStatus() {
  const [isIndependent, setIsIndependent] = useState<boolean>(false);
  const [isUn, setIsUn] = useState<boolean>(false);
  const { independentCountries, unMemberCountries } = useCountry();

  // Handle change for "Independent" checkbox
  function handleIndependent() {
    const newValue = !isIndependent; // Calculate new state
    setIsIndependent(newValue);
    independentCountries(newValue); // Pass the new value
  }

  function handleUn() {
    const newValue = !isUn; // Calculate new state
    setIsUn(newValue);
    unMemberCountries(newValue); // Pass the new value
  }

  return (
    <div className="flex flex-col space-y-2 px-4 pt-5">
      <h1 className="text-[#6B717D] text-[10px] desktop:text-[14px]">Status</h1>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="united-nations"
          className="border-gray-400 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white focus:ring-blue-500"
          onClick={handleUn}
          checked={isUn} // Ensure the checkbox reflects the state
        />
        <label
          htmlFor="united-nations"
          className="text-[12px] desktop:text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#BDC1C3]"
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
          className="text-[12px] desktop:text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#BDC1C3]"
        >
          Independent
        </label>
      </div>
    </div>
  );
}
