import { useCountry } from "@/contexts/countryContext";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function CountryDetail() {
  const { countryName } = useParams(); // Get country name from URL
  const { countries } = useCountry(); // Access all countries data
  const country = countries.find(
    (country) => country.name.common === countryName
  );

  // Handle case when country is not found
  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="flex flex-col items-center bg-[#1C1D1F] w-full  border-[#272B2E] p-4 ">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-48 mt-[-50px] rounded-lg"
      />
      <h1 className="text-xl text-[#D0D5D9] pt-2">{country.name.common}</h1>
      <div className="flex justify-center items-center gap-x-4 pt-4">
        <p className="text-[#D0D5D9] text-[10px] bg-[#292b31] p-2 text-nowrap rounded-lg">
          <strong>Population</strong>
          <span className="border-l-2 border-[#D0D5D9] mx-2 px-2">
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className="text-[#D0D5D9] text-[10px] bg-[#292b31] p-2 text-nowrap rounded-lg flex items-center justify-center">
          <strong>Area</strong>
          <span className="border-l-2 border-[#D0D5D9] mx-2 px-2">
            {country.area.toLocaleString()} km²
          </span>
        </p>
      </div>

      <Table>
        <TableBody className="text-[#D0D5D9]">
          <TableRow>
            <TableCell>Capital</TableCell>
            <TableCell className="text-right">{country.capital}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subregion</TableCell>
            <TableCell className="text-right">{country.subregion}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell className="text-right">
              {Object.values(country.languages).join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell className="text-right">
            {Object.values(country.currencies)
          .map((currency) => currency.name)  // Get the currency names
          .join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Continents</TableCell>
            <TableCell className="text-right">
              {country.continents.join(", ")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
