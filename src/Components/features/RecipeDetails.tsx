const RecipeDetails = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-5xl font-semibold uppercase max-[460px]:text-3xl">
        The title of this recipe
      </h2>
      <hr />
      {/* category button */}
      <div>
        <button className="py-1 px-8 border-[3px] border-first rounded-full">
          recipe
        </button>
      </div>
      {/* calorie count */}
      <div className="flex gap-2">
        <h3 className="text-2xl text-gray-600">calorie count:</h3>
        <h4 className="text-4xl font-semibold text-gray-800">20</h4>
      </div>

      {/* description */}
      <p className="w-[80%] text-lg text-gray-500 max-md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
        augue nec est tristique auctor. Donec non est at libero vulputate
        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
      </p>
    </div>
  );
};

export default RecipeDetails;
