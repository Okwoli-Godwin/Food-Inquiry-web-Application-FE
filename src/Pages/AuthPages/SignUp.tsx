import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { createUser } from "../../apis/UserApi/userApi";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const schema: any = yup
    .object({
       fullname: yup.string().required("Please Enter your name"),
      email: yup.string().required("Please Enter your email"),
      password: yup.string().required("Please Enter your password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null || undefined], "Passwords must match")
        .required("Password confirmation is required"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const postData = useMutation({
    mutationKey: ["user"],
    mutationFn: createUser,

    onSuccess: (data) => {
      Swal.fire({
        title: "Account Created",
        html: "Thank You",
        timer: 2000,
        icon: "success",
      });
      reset();
      navigate("/sign-in")
    },

    // If an error occured:
    onError: (error: any) => {
      if (error.message === "Network Error") {
        Swal.fire({
          title: error.message,
          text: error.code,
          timer: 2000,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Couldn't Create Account",
          text: error?.response?.data?.err,
          timer: 2000,
          icon: "error",
        });
      }
    },
  });

  const Submit = (event: any) => {
    event?.preventDefault();
    handleSubmit((data: any) => {
      postData.mutate(data);
    })();
  };
  return (
    <div className="w-[100%] h-[100%] bg-signinbg bg-no-repeat bg-center bg-cover">
      <div
        className="w-[100%] flex justify-between h-[100%] pt-[75px] pb-[75px] items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="w-[55%] pl-[80px] flex-col flex">
          <h2 className="text-[#fff] text-[35px] font-semibold">
            Healthy Recipes and Calories, all in One
          </h2>
          <p className="text-[#fff] mt-[15px] text-[20px]">
            A virtual center for designers, devs, PMs, and all design parties to
            perform their duties in unison. At least 200% faster with Mockplus.
          </p>
        </div>

        <div className="w-[40%] flex justify-center">
          {/* converted div to form */}
          <form
            onSubmit={Submit}
            className="w-[480px] bg-[#fff] rounded-[30px] p-[45px] flex-col"
          >
            <h3 className="text-[30px]">Sign up</h3>
            <input
              {...register("fullname")}
              required
              type="text"
              placeholder="yourname"
              className="h-[48px] w-[100%] border border-gray-400 pl-[15px] outline-none rounded mt-[40px] "
            />
            <input
              {...register("email")}
              required
              type="email"
              placeholder="Email"
              className="h-[48px] w-[100%] border border-gray-400 pl-[15px] outline-none rounded mt-[20px] "
            />
            <div className="flex items-center w-[100%] border border-gray-400 h-[48px] mt-[20px] rounded pr-[10px]">
              <input
                required
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-[100%] w-[100%]  pl-[15px] outline-none  "
              />
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex items-center w-[100%] border border-gray-400 h-[48px] mt-[20px] rounded pr-[10px]">
              <input
                required
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="h-[100%] w-[100%]  pl-[15px] outline-none  "
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className="cursor-pointer"
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            <button
              type="submit"
              className="w-[100%] h-[50px] flex justify-center items-center bg-third text-[#fff] rounded mt-[30px]"
            >
              {postData?.isLoading ? (
                <MoonLoader size={30} color="#ffff" />
              ) : (
                "Create account"
              )}
            </button>

            <h3 className="text-[15px] mt-[15px] flex">
              Already have an account?
              <NavLink to="/sign-in">
                <span className="text-fourth ml-[8px] cursor-pointer">
                  Sign in
                </span>
              </NavLink>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
