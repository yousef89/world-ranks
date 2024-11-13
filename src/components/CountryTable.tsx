import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  
  export default function CountryTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow className="text-[11px]">
            <TableHead className="w-[100px]">Flag</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Population</TableHead>
            <TableHead className="text-right">Area (km²)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#D0D5D9]">
            <TableRow>
              <TableCell className="font-medium">egypt</TableCell>
              <TableCell>egypt</TableCell>
              <TableCell>10100000</TableCell>
              <TableCell className="text-right">1000000</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    )
  }
  