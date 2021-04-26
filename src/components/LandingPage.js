import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Map from "./Map";
import { useAuth } from "../auth/Auth";
import Header from "./Header";
import Coconut from "../images/coconut.jpg"

function LandingPage() {
  const { currentUser } = useAuth();
  // const history = useHistory();

  // useEffect(() => {
  //   if (currentUser) {
  //     history.push("/");
  //   }
  // }, [currentUser]);

  return (
    <div>
      <main>
        <section className="aw-header bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 border-b border-gray-200 shadow-lg">
          <Header />
          <div className="pt-14 pb-10 container mx-auto ">
            <div className="text-center px-2 lg:px-0">
              <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-black leading-tight mb-2">
                Search, report & keep track of roadside issues now.
              </h1>
              <h3 className="text-gray-300 text-md md:text-1xl lg:text-2xl font-semibold leading-tight mb-2">
                Burst mains, potholes, water outages e.t.c. Report them all here!
              </h3>
              {!currentUser && (
                <div>
                  <Link to="/about">
                    <button className="px-5 py-1 mr-2 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                      Learn More
                    </button>
                  </Link>
                  <Link to="/map">
                    <button className="px-5 py-1 mt-4 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                      View Map
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* <section className="" style={{ backgroundImage: `url(${Coconut})` }}>
          <div className="w-full flex flex-col items-center">
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
        {/* <section className="bg-white">
          <div class="w-full flex flex-col items-center">
            <div className="absolute w-full">
              {!currentUser && (<Map />)}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default LandingPage;
