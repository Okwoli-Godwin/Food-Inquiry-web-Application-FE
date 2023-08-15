
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-[100%] h-[100%] bg-signinbg bg-no-repeat bg-center bg-cover">
      <div className="w-[100%] flex justify-between h-[100%] pt-[65px] pb-[64px] items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="w-[55%] pl-[80px] flex-col flex">
          <h2 className="text-[#fff] text-[35px] font-semibold">Healthy Recipes and Calories, all in One</h2>
          <p className="text-[#fff] mt-[15px] text-[20px]">
            A virtual center for designers, devs, PMs, and all design parties to perform their duties in unison. At least 200% faster with Mockplus.
          </p>
        </div>

        <div className="w-[40%] flex justify-center">
          <div className="w-[480px] bg-[#fff] rounded-[30px] p-[45px] flex-col">
            <h3 className="text-[30px]">Sign up</h3>
            <input
              type="email"
              placeholder="Email"
              className="h-[48px] w-[100%] border border-gray-400 pl-[15px] outline-none rounded mt-[40px] "
            />
            <div className="flex items-center w-[100%] border border-gray-400 h-[48px] mt-[20px] rounded pr-[10px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-[100%] w-[100%]  pl-[15px] outline-none  "
              />
              <div onClick={togglePasswordVisibility} className="cursor-pointer">
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex items-center w-[100%] border border-gray-400 h-[48px] mt-[20px] rounded pr-[10px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="h-[100%] w-[100%]  pl-[15px] outline-none  "
              />
              <div onClick={toggleConfirmPasswordVisibility} className="cursor-pointer">
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            <button className="w-[100%] h-[50px] flex justify-center items-center bg-third text-[#fff] rounded mt-[30px]">
              Create account
            </button>

            <h3 className="text-[15px] mt-[15px] flex">
              Already have an account?
              <NavLink to="/sign-in">
                <span className="text-fourth ml-[8px] cursor-pointer">Sign in</span>
              </NavLink>
            </h3>
            <div className="w-[100%] flex flex-col items-center mt-[25px]">
              <h3>Or sign up with</h3>
              <div className="mt-[18px] flex">
                <div className="text-[22px] ml-[12px]"><FcGoogle /></div>
                <div className="text-[blue] text-[18px] ml-[12px]"><BsFacebook /></div>
                <div className="text-[lightblue] text-[19px] ml-[12px]"><BsTwitter /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;