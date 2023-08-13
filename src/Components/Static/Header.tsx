import { useState, useEffect } from "react";
import {FiMenu} from "react-icons/fi"
import { NavLink } from "react-router-dom";


const Header = () => {
  const [show, setShow] = useState(false);

  const changeHeaderColor = () => {
    setShow(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <section>
      <div
        className={`w-[100%] h-[80px] flex justify-center ${
          show ? "fixed bg-first z-10" : "bg-first fixed z-10"
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <img src="http://unionagency.one/delice/img/logo.png" alt="" />

          <div className="flex items-center mt-[12px] lg:hidden">
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Home
            </h3>
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Our Menus
            </h3>
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              About Us
            </h3>
            <h3 className="mr-[55px] m-[10px] text-[15px] text-[#fff] font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Contact Us
            </h3>
          </div>


         <NavLink to="/sign-up">
         <div className="flex items-center mt-[12px] lg:hidden">
            <button className="w-[150px] h-[45px] rounded-md text-[#fff] border border-[#fff]">
              Sign In/Sign Up
            </button>
          </div>
         </NavLink>
         
          <div className="text-[#fff] text-[33px] cursor-pointer hidden lg:flex mt-[12px]">
            <FiMenu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;