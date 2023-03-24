import mapboxgl from "mapbox-gl";
import React from "react";
import { useEffect, useRef, useState } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import { geodata } from "./exampleRoute";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGV3cGVhcmNlIiwiYSI6ImNsZmw3Z3MzazAyZnQzeGthdHFpZWZtd2cifQ.tKYSfPl98gg0jYXpPvYPNg";

//google https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}
//openStreetMap https://tile.openstreetmap.org/{z}/{x}/{y}.png

class Map extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-73.985664, 40.748514],
      zoom: 12,
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });
    map.addControl(directions, "top-left");

    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: geodata.routes[0].geometry,
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
    });
  }

  render() {
    return <div ref={(el) => (this.mapWrapper = el)} className="mapWrapper" />;
  }
}

export default Map;
