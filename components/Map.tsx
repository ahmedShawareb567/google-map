import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = (): any => {
  const { locales, asPath, locale }: any = useRouter();

  const flightPolylines: any = [];
  const flightPolylong: any = [];

  const loader = new Loader({
    apiKey: "AIzaSyDphTQDTDdGlXko8V-TfBRTmzZRsXrkhGA",
    libraries: ["drawing"],
  });

  loader
    .load()
    .then((google: any) => {
      let poly: google.maps.Polyline;
      let map: google.maps.Map;
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 7,
        center: { lat: 30.0444, lng: 31.2357 },
      });

      poly = new google.maps.Polyline({
        path: flightPolylines,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });

      poly.setMap(map);

      map.addListener("click", (event: google.maps.MapMouseEvent) => {
        const path = poly.getPath();
        path.push(event.latLng);

        flightPolylines.push(event.latLng);
        // MARKERS
        flightPolylines.forEach((position: any, i: any) => {
          const marker = new google.maps.Marker({
            position,
            map,
            optimized: false,
          });

          // Add a click listener for each marker, and set up the info window.
          marker.addListener("click", (event: google.maps.MapMouseEvent) => {
            const first = flightPolylines[0];
            const result = flightPolylines.find(
              (path: any) => path === event.latLng
            );

            if (first == result) {
              console.log("it is first");
            } else {
              let currentIndex = flightPolylines.findIndex(
                (item: any) => item == result
              );
              // flightPolylines.splice(currentIndex, 1);
              console.log(currentIndex);
            }
          });
        });
      });
    })
    .catch((e) => {});

  return (
    <>
      <div id="map" style={{ height: "100vh" }}></div>
    </>
  );
};

export default Map;
