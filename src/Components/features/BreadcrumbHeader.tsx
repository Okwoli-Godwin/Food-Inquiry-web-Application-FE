const BreadcrumbHeader = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://klbtheme.com/qualis/wp-content/uploads/2018/12/category-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[40vh] bg-black flex items-center justify-center "
    >
      <div className="w-[50%] h-[50%] flex justify-center flex-col gap-5 mt-16 max-lg:w-[80%]">
        {/* breadcrumb */}
        <div className="flex justify-center gap-2 text-white">
          <p>Home</p>
          <p>{">"}</p>
          <p>Recipes</p>
          <p>{">"}</p>
          <p className="text-green-500">Indomie and Egg</p>
        </div>
        {/* title */}
        <h2 className="text-white text-center text-6xl font-bold max-md:text-4xl">
          Recipes
        </h2>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
