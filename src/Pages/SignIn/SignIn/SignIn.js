import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const SignIn = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2  min-h-[100vh] mt-20">
        <div className=" bg-gradient-to-r from-[#f0f0f0] to-slate-300 flex justify-center items-center">
          <div className=" w-[90%] md:w-[75%] lg:w-[60%] flex flex-col justify-center items-center">
            <img src={logo} alt="" className="w-36 h-36" />
            <h2 className="text-[5vw] text-[#112734]">
              <span className="text-[#375B26]">YOGA</span> INTERNATIONAL{" "}
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center  bg-gradient-to-l from-[#f0f0f0] to-slate-300">
          <div className=" w-[90%] md:w-[75%] lg:w-[60%]">
            <div>
              <h2 className="text-[#v112734] text-4xl font-[800] text-left mb-1">
                Sign <span className="text-[#375B26]">In</span>
              </h2>
              <div className="text-[#375B26] text-md flex justify-between mb-6">
                <p>Can’t sign in?</p>
                <Link to='/signup'>Sign up for account </Link>
              </div>
              <div>
                <form>
                  <div className="text-left mb-5">
                    <label
                      htmlFor="email"
                      className="block text-left text-[#50544A] text-md ml-1 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full h-10 rounded-lg outline-none px-3"
                      name=""
                      id="email"
                      required
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="text-left mb-10">
                    <label
                      htmlFor="password"
                      className="block text-[#50544A] text-md mb-2 ml-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full h-10 rounded-lg outline-none px-3 "
                      name=""
                      id="password"
                      required
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="flex justify-center items-center mb-7">
                    <div className="w-44 bg-[#B8C9A6] h-[2px]"></div>
                    <p className="text-[14px] text-[#354126] mx-5 ">or</p>
                    <div className="w-44 bg-[#B8C9A6] h-[2px]"></div>
                  </div>
                  <div>
                    <button className="outline-none text-[#7B6B6B] h-10 rounded-lg shadow-lg bg-white w-full text-lg flex justify-center items-center hover:bg-slate-50">
                      <FcGoogle className="w-7 h-7 mr-3" />
                      <p>Sign in With Google</p>
                    </button>
                    <button className="text-white w-56 h-10 bg-[#89B758] hover:bg-[#3d7922] rounded-[83px] mt-10 text-lg">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;