import { useQuery } from "@tanstack/react-query";
import { viewAParticularRecipe } from "../../apis/RecipiesApi/RecipiesApi";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => viewAParticularRecipe(id),
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-5xl font-semibold uppercase max-[460px]:text-3xl">
        The title of this recipe
      </h2>
      <hr />
      {/* category button */}
      {/* calorie count */}
      <div className="flex gap-2">
        <h3 className="text-2xl text-gray-600">calorie count:</h3>
        <h4 className="text-4xl font-semibold text-gray-800">
          {data?.data?.calorie}
        </h4>
      </div>

      {/* description */}
      <p className="w-[80%] text-lg text-gray-500 max-md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
        augue nec est tristique auctor. Donec non est at libero vulputate
        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
      </p>
      <hr />

      {/* ingredients */}
      <div className=" w-[100%] flex">
        <div className="w-[40%] flex flex-col border border-[lightgray] p-[20px]">
          <h3 className="text-[23px] font-semibold">Recipies</h3>
          <p className="mt-[15px]">{data?.data?.data?.ingredient}</p>
          <p className="mt-[8px]">4 Large eggs</p>
          <p className="mt-[8px]">5 Cups of mineral water</p>
          <p className="mt-[8px]">Pepper</p>
          <p className="mt-[8px]">Tomatoes</p>
        </div>

        <div className="w-[40%] flex flex-col border border-[lightgray] p-[20px] ml-[20px]">
          <h3 className="text-[23px] font-semibold">Nutrition</h3>
          <div className="mt-[15px] w-[100%] flex justify-between">
            <p>Calories</p>
            <p>329</p>
          </div>
          <div className="mt-[15px] w-[100%] flex justify-between">
            <p>Sugar</p>
            <p>10.5g</p>
          </div>
          <div className="mt-[15px] w-[100%] flex justify-between">
            <p>Protein</p>
            <p>22.5g</p>
          </div>
          <div className="mt-[15px] w-[100%] flex justify-between">
            <p>Fat</p>
            <p>02g</p>
          </div>
          <div className="mt-[15px] w-[100%] flex justify-between">
            <p>Carbs</p>
            <p>18g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
