function Ingredient({ingredient}: {ingredient: string}) {
  return (
    <>
      <li className="text-gray-500 text-xl">{ingredient}</li>
    </>
  );
}

export default Ingredient;
