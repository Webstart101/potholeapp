import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import Beach from "../images/beach.jpg";

function LandingPage() {
  return (
    <div>
      <main>
        <section
          className="aw-header bg-gradient-to-tl from-yellow-200 via-yellow-400 to-yellow-600 border-b border-gray-200 shadow-md"
          style={{ backgroundImage: `url(${Beach})` }}
        >
          <header className="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 w-full">
            <div className="aw-header__logo flex items-center flex-shrink-0 text-white mx-2 lg:mr-6 order-1 transition">
              <span className="font-bold text-2xl tracking-tight">
                Road Side Reporting
              </span>
            </div>
            <div className="flex order-2">
              <Link to="/login">
                <button className="px-7 py-1 mr-2 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-1 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </header>
          <div className="pt-20 container mx-auto ">
            <div className="text-center px-2 lg:px-0">
              <h1 className="text-white text-xl md:text-2xl lg:text-5xl font-black leading-tight mb-2">
                Find out what issues on the road may be hindering your commute!
              </h1>
              <Link to="/about">
                <button className="mx-auto lg:mx-0 text-white bg-purple-700 border-transparent hover:bg-purple-900 transition rounded md:my-6 py-2 px-5 shadow-lg ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="bg-white p-20">
          <div className="w-full flex flex-col items-center">
            <div className="bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-700 p-4 rounded-xl mb-10 text-4xl tracking-tight font-semibold text-white sm:text-4xl md:text-5xl shadow-2xl">
              <div class="grid grid-rows-2 grid-flow-col gap-1">
                <div class="row-span-2 text-9xl font-bold">3</div>
                <div class="col-span-1 mt-7 text-4xl font-bold">SIMPLE</div>
                <div class="row-span-1 col-span-2 text-4xl font-bold">
                  STEPS
                </div>
              </div>
            </div>
            <div className="p-2 grid grid-flow-col auto-rows-max text-center mx-auto">
              <div className="bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-700 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto ">
                <p className=" text-6xl text-center pt-8 font-semibold font-black text-white">
                  1
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Sign up now to report an issue.
                </p>
              </div>
              <div className="bg-gradient-to-tl from-red-400 via-red-500 to-red-600 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
                  2
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Double click on the map, then fill out the form to add a new
                  issue at that location.
                </p>
              </div>
              <div className="bg-gradient-to-tl from-green-400 via-green-500 to-green-700 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
                  3
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Share to get upvotes to raise awareness.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="bg-white">
          <div class="w-full flex flex-col items-center">
            <div className="absolute w-full">
              <Map />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
