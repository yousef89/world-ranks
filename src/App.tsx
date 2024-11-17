import BigCard from "./components/bigCard";
import CountryProvider from "./contexts/countryContext";
import CountryDetail from "./countryDetails/countryDetail";
import Logo from "./SVGs/logo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CountryProvider>
      <Router>
        <div className="flex flex-col items-center bg-planet-image h-[300px] bg-no-repeat bg-top bg-cover bg-[#1C1D1F] gap-y-16">
          <div className="pt-20">
            <Logo></Logo>
          </div>
          <Routes>
            <Route path="/" element={<BigCard />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
          </Routes>
        </div>
      </Router>
    </CountryProvider>
  );
}

export default App;
