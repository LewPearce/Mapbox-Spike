import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

//google https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}
//openStreetMap https://tile.openstreetmap.org/{z}/{x}/{y}.png

const Map = () => {
  const [startCoords, setStartCoords] = useState([51.5, -0, 55]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (data) => {
        setIsLoading(false)
        setStartCoords([data.coords.latitude, data.coords.longitude])},
      () => {},
      { enableHighAccuracy: true }
    );
  }, []);


  return isLoading ? <h1>Loading</h1> : ( <MapContainer
    center={startCoords}
    zoom={16}
    scrollWheelZoom={true}
    id="map"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Circle
      center={startCoords}
      pathOptions={{ color: "green", stroke: false }}
      radius={50}
    >
      <Popup></Popup>
    </Circle>
  </MapContainer>)
};

export default Map;
