import React from 'react';
import pipe from '../images/leaky.png';

export const LandingPage = () => {
    return (
      <section className="bg-white p-28 bg-red-200 h-auto h-full md:h-full" style={{ backgroundImage: `url(${pipe})` }}>
      <div className="w-full flex flex-col items-center">
      
        <div className="p-2 grid grid-flow-col auto-rows-max text-center mx-auto">
          <div className="bg-gradient-to-tl from-red-400 via-red-500 to-red-600 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto ">
            <p className=" text-6xl text-center pt-8 font-semibold font-black text-white">
              1
            </p>
            <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
              Sign up now to report an issue.
            </p>
          </div>
          <div className="bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-700 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
            <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
              2
            </p>
            <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
              Double click on the map, then fill out the form to add a new
              issue at that location.
            </p>
          </div>
          <div className="bg-gradient-to-tl from-green-400 via-green-500 to-green-700 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
            <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
              3
            </p>
            <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
              Share to get upvotes to raise awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}
