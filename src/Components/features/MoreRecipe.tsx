import { RecipeCard } from ".";

const MoreRecipe = () => {
  return (
    <div className="bg-white shadow-md w-[95%] p-5 grid grid-cols-4 gap-9 max-md:w-full max-md:flex max-md:overflow-x-scroll">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
};

export default MoreRecipe;
