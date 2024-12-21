import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "../../src/app/globals.css";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Map({ parisBookshops }) {
  const coordinates = [
    [48.863704964791864, 2.334678158416777],
    [48.86898506731983, 2.342585252549832],
    [48.864981225451785, 2.3625041301806617],
    [48.855326750747096, 2.3609562677659044],
  ];

  const [district, setDistrict] = useState("null");
  console.log(district);
  console.log(coordinates[district]);

  const mapRef = useRef();

  const ZoomHandler = () => {
    const map = useMap();
    const flyToMarker = useCallback(
      (coordinates) => {
        if (coordinates[district])
          map.flyTo(coordinates, 15, {
            animation: true,
            duration: 1.5,
          });
      },
      [map]
    );
    useEffect(() => {
      if (coordinates[district]) {
        flyToMarker(coordinates[district]);
      }
    }, [flyToMarker]);
  };

  //   const handleClick = () => {
  //     setDistrict("75020");
  //   };
  const handleSelect = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
  };
  return (
    <>
      <MapContainer
        className="w-96 h-96"
        center={[48.860213, 2.342567]}
        zoom={11.5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {parisBookshops.map((bookshop, index) => (
          <Marker key={index} position={bookshop.fields.wgs}>
            <Popup>A pretty CSS3 popup.</Popup>
          </Marker>
        ))}
        <ZoomHandler />
      </MapContainer>
      {/* <button onClick={handleClick}>Paris 20e</button> */}
      <select onChange={(e) => handleSelect(e)}>
        <option>Select</option>
        <option value="0">Paris 1e</option>
        <option value="1">Paris 2e</option>
        <option value="2">Paris 3e</option>
        <option value="3">Paris 4e</option>
      </select>
    </>
  );
}
