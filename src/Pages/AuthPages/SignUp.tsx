import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <div
      className="background h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1499133195/photo/a-delicious-bowl-of-soto-indonesian-food.jpg?s=612x612&w=0&k=20&c=0zOkaOLFjRSsq5HfktB1d-c6KOaefNvCd6Ptu8FiwOE=')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(50%)', // Adding dark background filter
      }}
    >
      <div className="contentsholder w-11/12 h-5/6 flex justify-between items-center">
        <div className="text w-3/5 bg-blue-500 relative flex flex-col justify-center">
          <img src="sign-logo2.png" className="logoo" height="5%" alt="Logo" />
          <p className="mock absolute bottom-0 left-0 text-white">
            @2014-2022 Mockplus Technology Co, Ltd. All rights reserved.
            <br />
            Privacy Policy Terms of Service
          </p>
          <h2 className="design text-white text-4xl absolute -left-12 bottom-20">
            Design + Collaboration, all in Mockplus
          </h2>
          <p className="caption text-white absolute -left-12 bottom-5 text-sm">
            A virtual center for designers, devs, PMs, and all design parties to perform their
            <br />
            duties in unison. At least 200% faster with Mockplus
          </p>
        </div>
        <div className="signupdetails w-2/5 bg-white rounded-2xl flex flex-col items-center">
          <h2 className="createyour pt-10 pb-8 text-center text-3xl">Create your accounts</h2>
          <input type="email" className="input2" placeholder="Email" />
          <input
            type="password"
            className="input1"
            placeholder="Password(6-20 characters)"
          />
          <input type="password" className="input1" placeholder="Confirm password" />
          <button className="create w-4/5 h-16 text-white text-xl bg-pink-500 rounded-md mt-5">
            Create account
          </button>
          <div className="signin flex justify-end pt-8 pr-12 text-sm">
            <p className="already">Already have an account?</p>
            <p className="sign text-pink-500 pl-1"> Sign in</p>
          </div>
          <div className="terms flex pt-8 text-sm">
            <input type="checkbox" className="check mt-1" />
            <p className="accept">I accept Mockup's</p>
            <p className="Service text-pink-500 pl-1">Terms of Service</p>
            <p className="and">&nbsp;and&nbsp;</p>
            <p className="Privacy text-pink-500">Privacy Policy</p>
          </div>
          <div className="signwith w-4/5 flex justify-between pt-10">
            <p>Or sign up with</p>
            <div className="logo flex">
              <i className="fab fa-google google pr-4"></i>
              <i className="fas fa-dove lark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
