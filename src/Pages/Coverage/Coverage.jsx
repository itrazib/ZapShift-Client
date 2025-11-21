import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
    const serviceCenters = useLoaderData()
  const position = [23.6850, 90.3563];
  return (
    <div className="my-8">
      <h1 className="text-5xl font-bold">We are available in 64 districts</h1>

      <div className="my-5">
        <form>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <input type="submit" value="Search" className="bg-primary h-10 px-3 text-black font-semibold rounded-r-sm" />
        </form>
      </div>

      <div  className="mt-15 mb-7">
        <h2 className="text-3xl font-bold">We deliver almost all over Bangladesh</h2>
      </div>

      <div className="border w-full h-[600px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[600px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            serviceCenters.map((center, index) => 
            <Marker key={index}  position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
            </Popup>
          </Marker>)
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
