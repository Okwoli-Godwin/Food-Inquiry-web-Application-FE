import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.pageYOffset >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        className={`w-[100%] h-[80px] flex bg-first justify-center ${
          isSticky ? "fixed transition ease-in-out duration-300" : ""
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <img src="http://unionagency.one/delice/img/logo.png" alt="" />

          <div className="flex items-center">
            <h3 className="mr-[55px] m-[10px] text-15px text-white font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Home
            </h3>
            <h3 className="mr-[55px] m-[10px] text-15px text-white font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Our Menus
            </h3>
            <h3 className="mr-[55px] m-[10px] text-15px text-white font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              About Us
            </h3>
            <h3 className="mr-[55px] m-[10px] text-15px text-white font-medium cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100">
              Contact Us
            </h3>
          </div>

          <div className="flex">
            <button className="w-[150px] h-[45px] rounded-md text-white border border-gray-400">
              Sign In/Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;