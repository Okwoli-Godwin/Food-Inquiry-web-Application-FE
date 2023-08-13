import { RecipeDetails, RecipeImage } from ".";

const Recipe = () => {
  return (
    <div className="bg-white w-[95%] p-5 grid grid-cols-[0.7fr,1fr] gap-9 max-md:grid-cols-1 max-md:w-full">
      <RecipeImage />
      <RecipeDetails />
    </div>
  );
};

export default Recipe;
