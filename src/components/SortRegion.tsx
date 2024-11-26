import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCountry } from "@/contexts/countryContext";

export default function SortRegion() {
  const regions = [
    "South America",
    "North America",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const { filterData } = useCountry();

  // Handle the change event when a region is selected
  const handleToggleChange = (region: string) => {
    filterData(region); // Pass the region to the filterData function
  };

  return (
    <div className="flex flex-col px-4 pt-5 gap-y-2">
      <h1 className="text-[#6B717D] text-[10px] desktop:text-[14px]">Region</h1>
      <ToggleGroup type="single" onValueChange={handleToggleChange}>
        <div className="flex gap-2 w-[100%]">
          {regions.map((region) => (
            <ToggleGroupItem
              key={region}
              value={region} // Set the value to the region name
              aria-label={`Toggle ${region}`} // Accessible label for the toggle
              className="text-[9px] desktop:text-[16px] text-wrap px-4 text-[#6B717D] data-[state-on]:hover:text-green-600"
            >
              {region}
            </ToggleGroupItem>
          ))}
        </div>
      </ToggleGroup>
    </div>
  );
}
