import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGV3cGVhcmNlIiwiYSI6ImNsZmw3Z3MzazAyZnQzeGthdHFpZWZtd2cifQ.tKYSfPl98gg0jYXpPvYPNg";

const apiKey = "2b4c255d8fb544c5b1184d2d539607f4";

const Maphook = ({ bike }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [gotLocation, setGotLocation] = useState(false);
  const [destination, setDestination] = useState([]);
  const [bearing, setBearing] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setBearing(position.coords.heading);
      setCurrentLocation([position.coords.longitude, position.coords.latitude]);
    });

    setGotLocation(true);
  }, []);

  useEffect(() => {
    setDestination(bike);
  }, [bike]);

  useEffect(() => {
    if (gotLocation) {
      axios
        .get(
          `https://api.geoapify.com/v1/routing?waypoints=${currentLocation[1]},${currentLocation[0]}|${destination[0]},${destination[1]}&mode=bicycle&apiKey=${apiKey}`
        )
        .then((route) => {
          if (!map) {
            const newMap = new mapboxgl.Map({
              container: mapContainerRef.current,
              style: "mapbox://styles/mapbox/streets-v10",
              center: currentLocation,
              zoom: 12,
            });

            newMap.on("load", () => {
              newMap.addSource("route", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [],
                },
              });

              newMap.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                  "line-join": "round",
                  "line-cap": "round",
                },
                paint: {
                  "line-color": "#3CEA8C",
                  "line-width": 8,
                },
              });

              setMap(newMap);
            });
          } else {
            map.getSource("route").setData(route.data);
            map.setBearing(bearing);
          }
        });
    }
  }, [destination, currentLocation, map, gotLocation, bearing]);

  return <div ref={mapContainerRef} className="mapWrapper" />;
};

export default Maphook;
