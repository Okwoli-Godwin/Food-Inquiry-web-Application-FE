const RecipeImage = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* featured image */}
      <div className="h-[65vh] bg-black">
        <img
          src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg"
          alt="main image"
          className="object-cover object-top"
        />
      </div>

      {/* other images */}
      <div className="h-[20vh] grid grid-cols-4 gap-5 ">
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img
            src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg"
            alt="img"
          />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img
            src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg"
            alt="img"
          />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img
            src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg"
            alt="img"
          />
        </div>
        <div className="shadow-sm border rounded-xl overflow-hidden ">
          <img
            src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeImage;
