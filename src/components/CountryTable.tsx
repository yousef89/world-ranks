import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCountry } from "@/contexts/countryContext";

export default function CountryTable() {
  const { filteredCountries } = useCountry(); // Use filtered countries instead of all countries

  return (
    <div className="px-4">
      <Table>
        <TableHeader>
          <TableRow className="text-[11px]">
            <TableHead>Flag</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Population</TableHead>
            <TableHead>Area (km²)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#D0D5D9]">
          {filteredCountries.map((country) => (
            <TableRow key={country.name.common}>
              <TableCell>
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                />
              </TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>{country.population.toLocaleString()}</TableCell>
              <TableCell>{country.area.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
