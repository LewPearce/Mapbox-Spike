
import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
} from "react-leaflet";
import { useState, useEffect } from "react";


navigator.geolocation.getCurrentPosition(data => console.log(data))

const Map = () => {
    const [startCoords, setStartCoords] = useState([51.5, -0,55])

    useEffect(() => {
        navigator.geolocation.watchPosition(data => setStartCoords([data.coords.latitude,data.coords.longitude ]), () => {}, {enableHighAccuracy: true})
    })

return (<MapContainer
        center={startCoords}
        zoom={16}
        scrollWheelZoom={true}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Circle
          center={startCoords}
          pathOptions={{ color: "green", stroke: false }}
          radius={50}
        >
          <Popup></Popup>
        </Circle>
      </MapContainer>)}

      export default Map