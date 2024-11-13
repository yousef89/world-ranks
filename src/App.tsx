import BigCard from "./components/bigCard";
import Logo from "./SVGs/logo";

function App() {
  return (
    <div className="flex flex-col items-center bg-planet-image h-[300px] bg-no-repeat bg-top bg-cover bg-[#1C1D1F] gap-y-16">
      <div className="pt-20">
        <Logo></Logo>
      </div>

      <BigCard></BigCard>
    </div>
  );
}

export default App;
