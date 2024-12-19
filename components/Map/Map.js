import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import '../../src/app/globals.css'

export default function Map(){
    return(
    <div className="w-full h-full">
    <MapContainer className="w-full h-full" center={[48.860213, 2.342567]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        </MapContainer>
    </div> 
    )
}