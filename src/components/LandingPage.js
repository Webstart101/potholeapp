import React from 'react'
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <main>
      <section className="aw-header bg-white border-b border-gray-200 shadow-md">
        <header className="container mx-auto flex items-center justify-between flex-wrap px-2 py-4 lg:p-6 ">
          <div className="aw-header__logo flex items-center flex-shrink-0 text-purple-700 hover:text-purple-900 mx-2 lg:mr-6 order-1 transition">
            <svg
              className="fill-current h-8 w-8 mr-2"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-lg tracking-tight">
              Road Side Reporting
            </span>
          </div>
          <div className="flex order-2">
          <Link to="/login"><button className="px-7 py-1 mr-2 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
              Login
            </button></Link>
            <Link to="/signup"><button className="px-5 py-1 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
              Sign Up
            </button></Link>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="text-center px-3 lg:px-0">
            <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight mb-8">
              Find out what issues on the road may be hindering your commute!
            </h1>
            <Link to="/about"><button className="mx-auto lg:mx-0 text-white bg-purple-700 border-transparent hover:bg-purple-900 transition rounded md:my-6 py-2 px-5 shadow-lg ">
              Learn More
            </button></Link>
          </div>
          <div className="flex items-center w-full mx-auto content-end">
            <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"></div>
          </div>
        </div>
      </section>
    </main>
        </div>
    )
}

export default LandingPage
