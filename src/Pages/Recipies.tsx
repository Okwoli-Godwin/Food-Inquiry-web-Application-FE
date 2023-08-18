import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { Data } from "../apis/Allinterface";
import { getAllRcipes } from "../apis/RecipiesApi/RecipiesApi";

const Recipes: React.FC = () => {
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);

   // Function to toggle the popup for a specific card
  const togglePopup = (index: number) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null); // Close the popup if already open
    } else {
      setOpenPopupIndex(index); // Open the clicked card's popup
    }
  };

  const usdAmount = 500.0;

  const { data, isLoading } = useQuery({
    queryFn: getAllRcipes,
  });

  useEffect(() => {
  if (data?.data?.data) {
    if (Array.isArray(data.data.data)) {
      const filteredRecipes = data.data.data.filter((recipe: any) =>
        recipe.title.includes(search)
      );
      setFilteredData(filteredRecipes);
    } else {
      console.error("Data is not an array:", data.data.data);
    }
  }
}, [data, search]);


  return (
    <section style={{ overflow: "hidden" }}>
      <div className="h-[100%] w-[100%] bg-recipehero bg-center bg-no-repeat bg-cover relative">
        <div
          className="w-[100%] h-[100%] pt-[200px] pb-[200px] flex-col flex justify-center items-center md:pt-[100px] md:pb-[100px]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-[#fff] text-[60px] font-bold md:text-[40px]">
            Recipe Grid
          </h1>
          <p className="text-[#fff] text-[30px] mt-[10px] md:text-[25px]">
            Home || Recipes
          </p>
          <div className="w-[600px] md:w-[350px] h-[60px] md:h-[50px] flex bg-[#fff] mt-[23px] rounded-full items-center overflow-hidden ">
            <div className="w-[10%] md:w-[15%] h-[100%] flex justify-center items-center">
              <div className="text-[24px]">
                <CiSearch />
              </div>
            </div>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="flex-1 h-[100%] border-none outline-none"
              placeholder="Search recipes......"
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center">
        <div className="w-[95%] flex h-[100%] mt-[65px] flex-wrap justify-between md:justify-center">
          {isLoading
            ? "Loading..."
            : filteredData?.map((recipe: Data, index: number) => (
                <div
                  key={recipe._id}
                  className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative mb-[40px]"
                >
                  <img
                    src={recipe.foodImg}
                    alt=""
                    className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105 object-cover"
                  />

                  <div className="w-[100%] p-[12px] flex-col">
                    <div className="w-[100%] flex items-center justify-between">
                      <h3 className="text-[25px]">{recipe.title}</h3>
                      <div className="flex items-center text-[gold]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </div>

                   <div className="flex items-center mt-[5px]">
                    <p>₦{recipe.amount}</p>
                    <button
                      onClick={() => togglePopup(index)} // Pass the card's index to togglePopup
                      className="border border-third w-[170px] h-[40px] rounded ml-[12px]"
                    >
                      Click to see USD price
                    </button>
                  </div>

                    {openPopupIndex === index ? (
                    <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        $ {usdAmount?.toFixed(2)}
                      </h2>
                      <p className="text-sm text-gray-500">Total USD</p>
                    </div>
                  ) : null}

                    <p className="mt-[5px]">Calories: {recipe.calorie} carbs</p>

                    <NavLink
                      to={`/recipe/${recipe._id}`}
                      className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px] flex items-center justify-center"
                    >
                      View Recipe
                    </NavLink>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;

