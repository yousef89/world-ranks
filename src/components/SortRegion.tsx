import { Toggle } from "@/components/ui/toggle"

export default function SortRegion() {
  const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']

  return (
    <div className="flex flex-col px-4 pt-5 gap-y-2">
        <h1 className="text-[#6B717D] text-[10px]">Region</h1>
      <div className="flex gap-2">
        {regions.map(region => (
          <Toggle
            key={region}
            aria-label={`Toggle ${region}`}
            className="text-[13px] h-6 text-[#6B717D] data-[state-on]:hover:text-green-600"
          >
            {region}
          </Toggle>
        ))}
      </div>
    </div>
  )
}