import React from 'react';

const Checkout = () => {
    return (
        <div className="py-6 mt-20 flex justify-center items-center  bg-gradient-to-l from-[#f0f0f0] to-slate-300">
          <div className=" w-[90%] md:w-[75%] lg:w-[60%]">
            <div>
              <h2 className="text-[#v112734] text-4xl font-[800] text-center mb-1">
                Your <span className="text-[#375B26]">Information</span>
              </h2>
              <div>
                <form >
                  <div className="text-left mb-5">
                    <label
                      htmlFor="name"
                      className="block text-left text-[#50544A] text-md ml-1 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 rounded-lg outline-none px-3"
                      name=""
                      id="name"
                      required
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="text-left mb-5">
                    <label
                      htmlFor="Phone"
                      className="block text-left text-[#50544A] text-md ml-1 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      className="w-full h-10 rounded-lg outline-none px-3"
                      name=""
                      id="Phone"
                      required
                      placeholder="Enter Phone"
                    />
                  </div>
                  <div className="text-left mb-5">
                    <label
                      htmlFor="email"
                      className="block text-left text-[#50544A] text-md ml-1 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="enail"
                      className="w-full h-10 rounded-lg outline-none px-3"
                      name=""
                      id="email"
                      required
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="text-left mb-10">
                    <label
                      htmlFor="address"
                      className="block text-[#50544A] text-md mb-2 ml-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 rounded-lg outline-none px-3 "
                      name=""
                      id="password"
                      required
                      placeholder="Enter Address"
                    />
                    <button className="text-white w-56 h-10 bg-[#89B758] hover:bg-[#3d7922] rounded-[83px] mt-10 text-lg mx-auto block">
                      Checkout
                    </button>
                  </div>
                </form>
                  
              </div>
            </div>
          </div>
        </div>
    );
};

export default Checkout;