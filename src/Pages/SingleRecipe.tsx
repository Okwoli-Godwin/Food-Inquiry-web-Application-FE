import { BreadcrumbHeader, Recipe } from "../Components";

const SingleRecipe = () => {
  return (
    <div>
      <BreadcrumbHeader />

      {/* recipe */}
      <div className="bg-[#F5F5F5] py-5 flex items-center flex-col">
        <Recipe />
      </div>
    </div>
  );
};

export default SingleRecipe;
