'use client';

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {getShopInfo, getStorePosition} from "@/app/_lib/staticData";
import InfoBox from "@/app/_components/map/InfoBox";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


export default function StoreMap() {
    const position = getStorePosition()
    return (
        <section className="flex flex-col md:relative md:h-[600px]">
            <div className="h-[400px] md:h-full">
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="h-full z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {getShopInfo().name} Store Location
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <InfoBox/>
        </section>
    );
}