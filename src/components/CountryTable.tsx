import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

// Accept the 'countries' prop for paginated data
export default function CountryTable({ countries }: { countries: any[] }) {
  const navigate = useNavigate(); // Move useNavigate hook to the top of the component

  const handleRowClick = (countryName: string) => {
    navigate(`/country/${countryName}`); // Navigate to the country's page
  };

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
          {countries.map((country) => (
            <TableRow
              key={country.name.common}
              onClick={() => handleRowClick(country.name.common)}
              className="cursor-pointer"
            >
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