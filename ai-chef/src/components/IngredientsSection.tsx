import Ingredient from "./Ingredient";

function IngredientsSection({ingredients}: string[]) {
  const ingredientList = ingredients.map((ingredient, index) => (
    <Ingredient key={index} ingredient={ingredient} />
  ));

  return (
    <section className="mt-10 space-y-7">
      <h1 className="text-3xl font-semibold">Ingrédients à disposition :</h1>
      <ul className="space-y-4 list-disc pl-10">{ingredientList}</ul>
    </section>
  );
}

export default IngredientsSection;
