import {
  BreadcrumbHeader,
  MoreRecipe,
  Recipe,
  RecipeText,
} from "../Components";

const SingleRecipe = () => {
  return (
    <div>
      <BreadcrumbHeader />

      {/* recipe */}
      <div className="bg-[#F5F5F5] py-5 flex items-center flex-col">
        <Recipe />
      </div>
      <div className="bg-[#F5F5F5] py-5 flex items-center flex-col">
        <RecipeText />
      </div>
      {/* more recipe */}
      <div className="bg-[#F5F5F5] py-5 flex items-center flex-col">
        <MoreRecipe />
      </div>
    </div>
  );
};

export default SingleRecipe;
