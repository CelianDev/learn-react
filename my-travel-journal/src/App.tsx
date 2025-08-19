import Header from "./components/Header";
import TravelCard from "./components/TravelCard.js";
import travel from "./data/travel.js";
import type { TravelCardProps } from "./types/TravelCardProps.js";

function App() {
  return (
    <>
      <Header />
      <main className="xl:w-3/5 lg:w-2/3 w-full mx-auto lg:p-10 md:p-4 p-0">
        {travel.map((item) => (
          <TravelCard key={item.id} {...(item as TravelCardProps)} />
        ))}
      </main>
    </>
  );
}

export default App;
