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

export default function Map({ parisBookshops, district, setDistrict }) {
  const coordinates = [
    [48.863704964791864, 2.334678158416777],
    [48.86898506731983, 2.342585252549832],
    [48.864981225451785, 2.3625041301806617],
    [48.855326750747096, 2.3609562677659044],
    [48.84630633875683, 2.3536252592422473],
    [48.85136566100697, 2.335051272854635],
    [48.85714776928274, 2.3125991864349533],
    [48.87354645913075, 2.313759208468015],
    [48.87663775335831, 2.340080271697847],
    [48.876826906212465, 2.3581972247334386],
    [48.859855888071376, 2.3793064533715547],
    [48.845141694359055, 2.3896860468534222],
    [48.82986623338986, 2.363082744482322],
    [48.83230446903985, 2.3264298862716855],
    [48.84203207217297, 2.297321651456523],
    [48.86212268166178, 2.282547310670731],
    [48.88706767795717, 2.3110217810106706],
    [48.890467526110015, 2.3494228894104956],
    [48.88653029924089, 2.3847624972884724],
    [48.863936141695014, 2.403323017682067],
  ];

  const ZoomHandler = () => {
    const map = useMap();
    const flyToMarker = useCallback(
      (coordinates, zoom) => {
        map.flyTo(coordinates, zoom, {
          animation: true,
          duration: 1.5,
        });
      },
      [map]
    );
    useEffect(() => {
      if (coordinates[district - 1]) {
        flyToMarker(coordinates[district - 1], 14);
      } else {
        flyToMarker([48.860213, 2.342567], 11.5);
        setDistrict(null);
      }
    }, [flyToMarker]);
  };

  const handleChange = (e) => {
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
        {parisBookshops
          .filter((bookshop) =>
            district !== null
              ? bookshop.fields.code_postal == `750${district}`
              : true
          )
          .map((bookshop, index) => (
            <Marker key={index} position={bookshop.fields.wgs}>
              <Popup>A pretty CSS3 popup.</Popup>
            </Marker>
          ))}
        <ZoomHandler />
      </MapContainer>
      <select onChange={(e) => handleChange(e)}>
        <option>Sélectionner un arrondissement </option>
        <option value="01">Paris 1e</option>
        <option value="02">Paris 2e</option>
        <option value="03">Paris 3e</option>
        <option value="04">Paris 4e</option>
        <option value="05">Paris 5e</option>
        <option value="06">Paris 6e</option>
        <option value="07">Paris 7e</option>
        <option value="08">Paris 8e</option>
        <option value="09">Paris 9e</option>
        <option value="10">Paris 10e</option>
        <option value="11">Paris 11e</option>
        <option value="12">Paris 12e</option>
        <option value="13">Paris 13e</option>
        <option value="14">Paris 14e</option>
        <option value="15">Paris 15e</option>
        <option value="16">Paris 16e</option>
        <option value="17">Paris 17e</option>
        <option value="18">Paris 18e</option>
        <option value="19">Paris 19e</option>
        <option value="20">Paris 20e</option>
      </select>
    </>
  );
}
