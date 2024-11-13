import { Checkbox } from "@/components/ui/checkbox";

export default function SortStatus() {
  return (
    <div className="flex flex-col space-y-2 px-4 pt-5">
        <h1 className="text-[#6B717D] text-[10px]">Status</h1>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="united-nations" 
          className="border-gray-400 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white focus:ring-blue-500"
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