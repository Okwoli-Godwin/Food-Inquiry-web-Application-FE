const newRecipe = () => {
  return (
    <div className=" h-screen w-full flex flex-col gap-8  ">
      <div className="w-full py-5 text-xl bg-first text-white border-b">
        {" "}
        Create Recipe
      </div>

      <div className="grid mx-5 gap-5 grid-cols-[1fr,0.5fr]  lg:grid-cols-1">
        {/* post */}
        <div className=" flex flex-col gap-16">
          {/* title */}
          <div>
            <p className="text-2xl font-semibold">Title</p>
            <input
              type="text"
              className="w-full h-[10vh] text-xl pl-3 outline-none border-b"
              placeholder="enter recipe title"
            />
          </div>

          {/* body */}
          <div className="flex flex-col gap-7">
            <p className="text-2xl font-semibold">Recipe text</p>
            <textarea
              placeholder="enter recipe description"
              className="w-full border-b outline-none text-xl"
              rows={10}
            />
          </div>
        </div>

        {/* sidebar */}
        <div className="bg-blue-500">
          {/* featured image */}
          <div className="w-[full] h-[40vh] bg-[#f1f1f1] rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default newRecipe;
