import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "../components/Header";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = () => {
  const mapContainer = useRef();
  const [mapCenter, setMapCenter] = useState({
    lat: -59.570655, //Lng center for Barbados
    lng: 13.193114, //Lat center for Barbados
  });
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    var bounds = [
      [-60.27172006347844, 12.729393667108312], // Southwest coordinates
      [-58.86958993652529, 13.655956198937346], // Northeast coordinates
    ];
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapCenter.lng, mapCenter.lat],
      zoom: zoom,
      maxBounds: bounds,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.fitBounds([
      [-59.24930490233564, 13.427986048198505],
      [-59.8920050976494, 12.958016032319861],
    ]);

    map.on("move", () => {
      setMapCenter({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
      });
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="w-full flex flex-col h-screen bg-gray-300">
      <Header title="Pothole App" />

      <div className="w-full flex-1 flex">
        <div className="w-1/6 bg-white">
          <p>Sidebar</p>
        </div>
        <div className="w-5/6">
         <div className="h-full w-full" ref={mapContainer}>
      <div className="absolute m-5 z-10 rounded bg-gray-800 bg-opacity-80 p-2 text-white">
        Longitude: {mapCenter.lng} | Latitude: {mapCenter.lat} | Zoom: {zoom}
      </div>
    </div>
        </div>
      </div>  
      </div>

    
  );
};

export default Map;
