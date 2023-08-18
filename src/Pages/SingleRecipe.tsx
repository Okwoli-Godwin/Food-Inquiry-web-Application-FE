import { Recipe } from "../Components";

const SingleRecipe = () => {



  

  return (
    <>
      <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
        <div
          className="w-[100%] h-[100%] pt-[160px] pb-[160px] flex-col flex justify-center items-center md:pt-[100px] md:pb-[100px]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-[#fff] text-[60px] font-bold">Recipe Details</h1>
          <p className="text-[#fff] text-[30px] mt-[10px]">Home || Details</p>
        </div>

        <div className="bg-[#F5F5F5] py-5 flex items-center flex-col">
          <Recipe />
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
