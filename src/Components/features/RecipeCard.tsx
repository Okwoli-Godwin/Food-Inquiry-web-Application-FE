const RecipeCard = () => {
  return (
    <div className="p-3 h-full ">
      <div className="overflow-hidden ">
        <img
          src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p6.jpg"
          alt="image"
          className="hover:scale-105 ease-in duration-200 transition-all w-[242px]"
        />
      </div>
      <div>
        <p
          style={{ textTransform: "capitalize" }}
          className="text-center text-xl font-medium"
        >
          title of this recipe
        </p>
        <div className="flex gap-2 justify-center items-center ">
          <p className="text-lg text-gray-500">calorie count: </p>
          <p className="text-lg text-gray-700 font-semibold">20</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
