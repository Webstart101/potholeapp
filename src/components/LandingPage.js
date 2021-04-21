import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import { useAuth } from "../auth/Auth";
import Header from "./Header";

function LandingPage() {
  const { currentUser } = useAuth();
  return (
    <div>
      <main>
        <section className="aw-header bg-gradient-to-tl from-gray-900 via-gray-800 to-gray-900 border-b border-gray-200 shadow-lg">
          {!currentUser && <Header />}
          <div className="pt-20 container mx-auto ">
            <div className="text-center px-2 lg:px-0">
              <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-black leading-tight mb-2">
                Search, report & keep track of roadside issues now.
              </h1>
              <Link to="/about">
                <button className="mx-auto lg:mx-0 text-white bg-purple-700 border-transparent hover:bg-purple-900 transition rounded md:my-6 py-2 px-5 shadow-lg ">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white mt-10">
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
