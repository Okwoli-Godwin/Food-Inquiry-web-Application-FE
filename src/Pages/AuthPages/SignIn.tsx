import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { userLogin } from "../../apis/UserApi/userApi";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const schema: any = yup
    .object({
      email: yup.string().required("Please Enter your email"),
      password: yup.string().required("Please Enter your password"),
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
    mutationFn: userLogin,

    onSuccess: (data) => {
      Swal.fire({
        title: "Sign In Successfull",
        html: "Thank You",
        timer: 2000,
        icon: "success",
      });
      reset();
      navigate("/")
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
          title: "Couldn't Sign In",
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
        className="w-[100%] flex justify-between h-[100%] pt-[66px] pb-[66px] items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="w-[55%] pl-[80px] flex-col flex">
          <h2 className="text-[#fff] text-[35px] font-semibold">
            Healthy Recipies and Calories, all in One
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
            <h3 className="text-[30px]">Sign in</h3>
            <input
              required
              {...register("email")}
              type="email"
              placeholder="Email"
              className="h-[48px] w-[100%] border border-gray-400 pl-[15px] outline-none rounded mt-[40px]"
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

            <h3 className="text-[17px] font-semibold mt-[20px]">
              Forgot password
            </h3>

            <button
              type="submit"
              className="w-[100%] h-[50px] flex justify-center items-center bg-third text-[#fff] rounded mt-[30px]"
            >
              {postData?.isLoading ? (
                <MoonLoader size={30} color="#ffff" />
              ) : (
                "Sign In"
              )}
            </button>

            <h3 className="text-[15px] mt-[15px] flex">
              Don't have an account?
              <NavLink to="/sign-up">
                <span className="text-fourth ml-[8px] cursor-pointer">
                  Sign up
                </span>
              </NavLink>
            </h3>
            <div className="w-[100%] flex flex-col items-center mt-[25px]">
              <h3>Or sign in with</h3>
              <div className="mt-[18px] flex">
                <div className="text-[22px] ml-[12px]">
                  <FcGoogle />
                </div>
                <div className="text-[blue] text-[18px] ml-[12px]">
                  <BsFacebook />
                </div>
                <div className="text-[lightblue] text-[19px] ml-[12px]">
                  <BsTwitter />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
