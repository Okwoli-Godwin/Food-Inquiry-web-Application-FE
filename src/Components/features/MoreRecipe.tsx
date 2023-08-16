import { RecipeCard } from ".";

const MoreRecipe = () => {
  return (
    <div className="bg-white">
      <h1 className="text-3xl py-4 px-5 font-semibold">Related Recipes:</h1>
      <table className="w-full">
        <tbody className="w-full">
          <tr className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <td className="border p-4">
              <RecipeCard />
            </td>
            <td className="border p-4">
              <RecipeCard />
            </td>
            <td className=" md:table-cell border p-4">
              <RecipeCard />
            </td>
            <td className=" md:table-cell border p-4">
              <RecipeCard />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MoreRecipe;
