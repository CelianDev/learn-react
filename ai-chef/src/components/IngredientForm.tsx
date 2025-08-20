import { useState, type SetStateAction } from "react";

function IngredientForm({addIngredients,}: {addIngredients: (ingredient: string) => void;}) {
  const [ingredient, setIngredient] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (ingredient.trim()) {
      addIngredients(ingredient);
      setIngredient("");
    }
  }

  function handleChange(e: { target: { value: SetStateAction<string>; }; }) {
    setIngredient(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        className="flex-1 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 shadow-sm focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-black"
        type="text"
        name="ingredient"
        value={ingredient}
        onChange={handleChange}
        placeholder="Ex: Banane"
      ></input>
      <button
        className="inline-flex items-center self-start w-auto gap-x-2 rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        type="submit"
      >
        Ajouter un ingrédient
      </button>
    </form>
  );
}

export default IngredientForm;
