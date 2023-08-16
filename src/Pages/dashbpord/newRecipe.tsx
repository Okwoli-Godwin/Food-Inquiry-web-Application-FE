const newRecipe = () => {
  return (
    <div className=" h-screen w-full flex flex-col gap-8  ">
      <div className="w-full py-5 text-xl bg-first text-white border-b">
        {" "}
        Create Recipe
      </div>

      <div className="grid mx-5 gap-32 grid-cols-[1fr,0.5fr]  lg:grid-cols-1 lg:gap-10 ">
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
        <div className=" flex flex-col gap-5 lg:mb-5">
          {/* featured image */}
          <div className="w-[full] py-3 px-4  flex flex-col gap-6 items-start bg-[#f1f1f1] rounded-md border overflow-hidden">
            <div className="h-[80%] w-full">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
                alt="featured image"
                className="w-full h-full object-cover object-top rounded-md"
              />
            </div>
            <button className="bg-first py-3 px-4 rounded-md text-white">
              featured image
            </button>
          </div>

          {/* post recipe */}
          <div className="w-[full] py-3 px-4  flex flex-col gap-6 items-start bg-[#f1f1f1] rounded-md border overflow-hidden">
            <p>title of post</p>
            <button className="bg-first py-3 px-4 rounded-md text-white">
              publish recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newRecipe;
