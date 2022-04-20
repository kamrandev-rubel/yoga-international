import React from 'react';

const Blogs = () => {
    return (
      <div className="my-28 w-full ">
        <div className='flex mx-auto justify-center flex-col md:flex-row w-10/12'>
          <div className='p-5 '>
            <h2 className='text-[#89B758] text-2xl mb-7'>Drefents between authentication bs authorization</h2>
            <p>
              Q1 Authentication vs. Authorization So, what is the difference
              between authentication and authorization? Simply put,
              authentication is the process of verifying who someone is, whereas
              authorization is the process of verifying what specific
              applications, files, and data a user has access to. The situation
              is like that of an airline that needs to determine which people
              can come on board. The first step is to confirm the identity of a
              passenger to make sure they are who they say they are. Once a pa
            </p>
          </div> 
          <div className='p-5 '>
            <h2 className='text-[#89B758] text-2xl mb-7'>Why are you using firebase?</h2>
            <p>
              Google Firebase offers many features that pitch it as the go-to
              backend development tool for web and mobile apps. It reduces
              development workload and time. And it's a perfect prototyping
              tool. Firebase is simple, lightweight, friendly, and industrially
              recognized. Tired of writing boring code for your backend, or
              can't even write it at all? Try Google Firebase. So what's Google
              Firebase, and why should you build your app around it? What other
              options do you have{" "}
            </p>
          </div> 
          <div>
            <h2 className='text-[#89B758] text-2xl mb-7'>
              What other services does firebase provide other than
              authentication
            </h2>
            <p>
              1/ Parse – Open Source Backend Platform; 2/ Back4app – Parse
              Hosting Platform; 3/ Kinvey – Mobile Backend as a Service (mBaaS)
              for the Enterprise; 4/ Backendless – Mobile Backend and API
              Services Platform; 5/ Kuzzle – Backend for web, hybrid, or native
              mobile apps and IoT projects; 6/ Pubnub – Real-time APIs and
              Global Messaging; 7/ Kumulos – App Performance Management; 8/ Game
              Sparks – Game Backend Platform; 9/ Hoodi
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;