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

  return (
    <>
      <MapContainer
        className="map"
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
              <Popup>
                {bookshop.fields.nom_structure}
                <br />
                {bookshop.fields.adresse}
                <br />
                {`${bookshop.fields.code_postal} 
                ${bookshop.fields.ville}`}
              </Popup>
            </Marker>
          ))}
        <ZoomHandler />
      </MapContainer>
    </>
  );
}
