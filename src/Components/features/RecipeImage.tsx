import { useParams } from "react-router-dom";
import { viewAParticularRecipe } from "../../apis/RecipiesApi/RecipiesApi";
import { useQuery } from "@tanstack/react-query";

const RecipeImage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => viewAParticularRecipe(id),
  });

  return (
    <div className="flex flex-col gap-5">
      {/* featured image */}
      <div className="h-[65vh] bg-black">
        <img
          src={data?.data?.data?.foodImg}
          alt="main image"
          className="object-cover object-top"
        />
      </div>

      {/* other images */}
      <div className="h-[20vh] grid grid-cols-4 gap-5 ">
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img src={data?.data?.data?.foodImg} alt="img" />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img src={data?.data?.data?.foodImg} alt="img" />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img src={data?.data?.data?.foodImg} alt="img" />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img src={data?.data?.data?.foodImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RecipeImage;
