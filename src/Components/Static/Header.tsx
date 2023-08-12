import { Link } from "react-scroll"
import { useState } from "react"

const Header = () => {
    const [show, setShow] = useState(false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 70) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    window.addEventListener("scroll", changeHeaderColor)
  return (
      <>
          {show ? (
              <section>
          <div className="w-[100%] h-[80px] flex bg-first justify-center">
              <div className="w-[95%] flex items-center justify-between">
                  <img src="http://unionagency.one/delice/img/logo.png" alt="" />

                  <div className="flex items-center">
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

                  <div className="flex">
                      <button className="w-[150px] h-[45px] rounded-md text-[#fff] border border-gray-400">Sign In/Sign Up
                      </button>
                  </div>
              </div>
          </div>
    </section>
          ) : (
                  <section>
          <div className="w-[100%] h-[80px] flex bg-first justify-center">
              <div className="w-[95%] flex items-center justify-between">
                  <img src="http://unionagency.one/delice/img/logo.png" alt="" />

                  <div className="flex items-center">
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

                  <div className="flex">
                      <button className="w-[150px] h-[45px] rounded-md text-[#fff] border border-gray-400">Sign In/Sign Up
                      </button>
                  </div>
              </div>
          </div>
    </section>
          )}
      </>
  )
}

export default Header