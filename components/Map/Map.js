import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../src/app/globals.css";

export default function Map({ parisBookshops }) {
  return (
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
    </MapContainer>
  );
}
