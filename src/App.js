import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="w-full flex flex-col h-screen bg-gray-300">
      <Header title="Pothole App" />

      <div className="w-full flex-1 flex">
        <div className="w-2/6 bg-white">
          <Sidebar/>
        </div>
        <div className="w-5/6">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
