import { useState } from "react";
import Header from "./components/Header";
import IngredientForm from "./components/IngredientForm";
import IngredientsSection from "./components/IngredientsSection";

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  function addIngredients(ingredient: string) {
    setIngredients((prev) => [...prev, ingredient]);
  }
  return (
    <>
      <Header />
      <main className="mx-auto flex-1 max-w-7xl mt-20 px-12 sm:px-12 lg:px-16">
        <IngredientForm addIngredients={addIngredients} />
        <IngredientsSection ingredients={ingredients} />
      </main>
    </>
  );
}

export default App;
