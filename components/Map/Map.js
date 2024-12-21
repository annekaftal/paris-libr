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
  const [district, setDistrict] = useState(null);
  console.log(district);

  const mapRef = useRef();

  const ZoomHandler = () => {
    const map = useMap();
    const flyToMarker = useCallback(
      (coordinates, zoom) => {
        if (district !== "")
          map.flyTo(coordinates, zoom, {
            animation: true,
            duration: 1.5,
          });
      },
      [map]
    );
    useEffect(() => {
      if (district) {
        if (district !== "") {
          flyToMarker([48.960213, 2.042567], 10);
        }
      }
    }, [flyToMarker]);
  };

  const handleClickTwenty = () => {
    setDistrict("75020");
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
      <button onClick={handleClickTwenty}>Paris 20e</button>
    </>
  );
}
