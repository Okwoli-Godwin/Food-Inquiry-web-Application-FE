import { MdDashboard, MdOutlinePayment, MdManageHistory } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsArrowLeftRight, BsReceipt } from "react-icons/bs";
import { useState } from "react";
import Navprop from "../../Components/common/Navprop";

const DashSidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`${
        show ? "w-[200px] bg-gradient-to-b from-first" : "w-[80px] bg-first"
      }  flex items-center relative justify-center  transition-all ease-linear duration-[200ms]  max-md:hidden max-lg:hidden max-md:w-full h-screen max-md:h-full max-lg:w-[8%]`}
    >
      <div
        className={`${
          show ? "w-[90%]" : "w-[60%] "
        } h-[95%] flex items-start flex-col`}
      >
        {/* logo and name */}
        {/* desktop logo view */}
        <div className="flex items-center gap-3  pb-8 ">
          {/* circle over text */}
          <div
            className={`p-1 ${
              show ? "border-white" : "border-white w-full flex justify-center"
            } border rounded-full`}
          >
            <div className="py-[1px] px-[6px] bg-third text-white  text-xl  rounded-full">
              M
            </div>
          </div>

          {/* name */}
          {show ? <p className="text-slate-300">Daisy</p> : null}
        </div>
        {/* tablet logo view  */}
        <br />
        <br />

        {/* navigation */}
        <div className="flex flex-col justify-between h-full max-lg:hidden">
          {/* first nav */}
          <div className="">
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <Navprop
                text={show ? "Home" : ""}
                icon={<MdDashboard />}
                route=""
                color="white"
                size={show ? "xl" : "4xl"}
              />
              <Navprop
                text={show ? "New Recipe" : ""}
                icon={<MdOutlinePayment />}
                route=""
                color="white"
                size={show ? "xl" : "4xl"}
              />
            </div>
          </div>
          {/* support nav */}

          <div>
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <a href="mailto:isaacetor7@gmail.com">
                <Navprop
                  text={show ? "support" : ""}
                  icon={<BiHeart />}
                  route=""
                  color={show ? "[#ff6e00]" : "white"}
                  size={show ? "xl" : "4xl"}
                />
              </a>
              <Navprop
                text={show ? "log out" : ""}
                icon={<RiLogoutCircleLine />}
                route=""
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "4xl"}
              />
            </div>
          </div>

          {/* toggle */}
          <div
            className="p-3 cursor-pointer text-lg shadow-md bg-first rounded-full text-white absolute top-14 -right-5"
            onClick={() => setShow(!show)}
          >
            <BsArrowLeftRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
