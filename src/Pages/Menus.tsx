import React, { useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllRcipes } from "../apis/RecipiesApi/RecipiesApi";
import { Data } from "../apis/Allinterface";

interface Props {
  searchdata: Data[];
  setsearchdata: React.Dispatch<React.SetStateAction<Data[]>>;
}

const Menus: React.FC<Props> = ({ searchdata }) => {
  const [usdAmount] = useState(500.0);

  const { data, isLoading } = useQuery({
    queryFn: getAllRcipes,
  });

  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    if (searchdata.length >= 1) {
      setFilteredData(searchdata);
    } else if (data?.data?.data && Array.isArray(data.data.data)) {
      setFilteredData(data.data.data.slice(0, 3));
    } else {
      setFilteredData([]);
    }
  }, [data, searchdata]);

  // Create a state to track which card's popup is open
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);

  // Function to toggle the popup for a specific card
  const togglePopup = (index: number) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null); // Close the popup if already open
    } else {
      setOpenPopupIndex(index); // Open the clicked card's popup
    }
  };

  return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">
      <h3 className="text-[40px]">Recipies</h3>

      <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap justify-between lg:justify-center">
        {isLoading
          ? "Loading..."
          : filteredData?.map((e: any, index: number) => (
              <div
                key={e.id}
                className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative"
              >
                <img
                  src={e.foodImg}
                  alt=""
                  className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105 object-cover"
                />

                <div className="w-[100%] p-[12px] flex-col">
                  <div className="w-[100%] flex items-center justify-between">
                    <h3 className="text-[25px]">{e.title}</h3>
                    <div className="flex items-center text-[gold]">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                  </div>

                  <div className="flex items-center mt-[5px]">
                    <p>₦{e.amount}</p>
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

                  <p className="mt-[5px]">Calories: {e.calorie} carbs</p>

                  <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">
                    <NavLink to={`/recipe/${e._id}`}>View Recipes</NavLink>
                  </button>
                </div>
              </div>
            ))}
      </div>

      <NavLink to="/recipies">
        <button className="w-[220px] h-[45px] mt-[50px] border border-third rounded flex justify-center items-center hover:bg-third hover:text-[#fff]">
          View more
        </button>
      </NavLink>
    </div>
  );
};

export default Menus;