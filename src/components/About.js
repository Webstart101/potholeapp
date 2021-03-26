import React from 'react';
import Header from "../components/Header";

const About = () => {
  return (
    <div class="w-full flex flex-col h-screen bg-gray-300 bg-gradient-to-b from-gray-100 to-gray-200">
      <Header title="Pothole App" />
      <div class=" flex-col w-full bg-white h-2/6">
        <img class="object-cover h-full w-full" src="https://backroads-web.s3.amazonaws.com/images/trips/2016/slideshows/browser/MYTC-yellowstone-tetons-multisport-tour.jpg" alt="nature" />
      </div>

      <div class="flex items-center justify-center h-screen ">

        <div class="bg-white rounded-lg border shadow-lg p-10 w-6/12 absolute inset-x-auto bottom-0 h-5/6 ">
          <div>
            <h1 class="text-4xl  font-bold ">About</h1>
            <hr class="mt-6 border-b-1 border-gray-200" />
            <p class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>




      </div>
    </div>
  )
}

export default About

