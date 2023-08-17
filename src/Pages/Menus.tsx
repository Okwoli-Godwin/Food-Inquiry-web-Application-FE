import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import food from "./Food";
import { getAllRcipes } from "../apis/RecipiesApi/RecipiesApi";
import { useQuery } from "@tanstack/react-query";

const Menus = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [amountNaira, setAmountNaira] = useState();
  const [amountDollar, setamountDollar] = useState();
  const [showInDollar, setShowInDollar] = useState();

  const Toggle = () => {
    setShow(!show);
  };
  const Toggle2 = () => {
    setShow2(!show2);
  };
  const Toggle3 = () => {
    setShow3(!show3);
  };

  const usdAmount = 500.0;
  const { data, isLoading } = useQuery({
    queryFn: getAllRcipes,
  });

  //   const [amountInDollars, setAmountInDollars] = useState<number>();
  //   useEffect(() => {
  //     async function convertNairaToDollars() {
  //       try {
  //         const response = await axios.get("your bakend uri");
  //         const nairaAmount = response.data.amountInNaira;
  //         setAmountNaira(nairaAmount);

  //         //cal the equil amount in dollars
  //         const API_KEY = "8eaec5c5ca204ea1a5fcff24614e6fb7";
  //         const FROM_CURRENCY = "NGN";
  //         const TO_CURRENCY = "USD";
  //         const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;
  //         //    const AMOUNT_IN_NAIRA = usdAmount;
  //         const exchangeRateResponse = await axios.get(apiUrl);
  //         const exchangeRate = exchangeRateResponse.data.rates;
  //         const naraToDollarRates =
  //           exchangeRate[TO_CURRENCY] / exchangeRate[FROM_CURRENCY];
  //         const amountInDollars = nairaAmount * naraToDollarRates;

  //         setAmountInDollars(amountInDollars);
  //       } catch (error) {
  //         console.log("error fetching exchange");
  //         return null;
  //       }
  //     }

  //     convertNairaToDollars();
  //   }, []);

  {
    // amountInDollars?.toFixed(2)
  }

  return (
    <div className="w-[100%] flex h-[100%] flex-col pt-[50px] items-center">
      <h3 className="text-[40px]">Recipies</h3>

      <div className="w-[95%] flex h-[100%] mt-[35px] flex-wrap justify-between lg:justify-center">
        {isLoading
          ? "Loading..."
          : data?.data?.data?.slice(0, 3).map((e: any) => (
              <div className="w-[390px] h-[100%] rounded-lg flex-col overflow-hidden shadow-md object-fit-cover relative">
                <img
                  src={e.foodImg}
                  alt=""
                  className="w-[100%] h-[250px] transition duration-500 group-hover:scale-105"
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
                      onClick={Toggle3}
                      className="border border-third w-[170px] h-[40px] rounded ml-[12px]"
                    >
                      Click to see USD price
                    </button>
                  </div>

                  {show3 ? (
                    <div className="absolute w-[160px] h-[150px] bg-white shadow-sm top-[150px] left-[100px] rounded-sm transition-transform duration-300 flex flex-col justify-center items-center">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        $ {usdAmount?.toFixed(2)}
                      </h2>
                      <p className="text-sm text-gray-500">Total USD</p>
                    </div>
                  ) : null}

                  <p className="mt-[5px]">Calories: {e.calorie} carbs</p>

                  <button className="w-[100%] h-[40px] bg-third text-[#fff] cursor-pointer rounded mt-[20px]">
                    View Recipies
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
