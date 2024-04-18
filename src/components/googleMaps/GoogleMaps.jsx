import React, { useEffect } from "react";

function GoogleMaps({ coordinates, nameQuerry }) {
    const google = window.google;


    useEffect(() => {
        let map;
        let service;
        let infowindow;

        const initMap = () => {
            const center = new google.maps.LatLng(coordinates.center.lat, coordinates.center.lng);
            infowindow = new google.maps.InfoWindow();
            map = new google.maps.Map(document.getElementById("map"), {
                center: center,
                zoom: coordinates.zoom,
            });


            const request = {
                query: nameQuerry,
                fields: ["name", "geometry"],
            };

            service = new google.maps.places.PlacesService(map);
            service.findPlaceFromQuery(request, (results, status) => {
                console.log(request.query)
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    for (let i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }

                    map.setCenter(results[0].geometry.location);
                }
            });
        };

        const createMarker = (place) => {
            if (!place.geometry || !place.geometry.location) return;

            const marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
            });

            google.maps.event.addListener(marker, "click", () => {
                infowindow.setContent(place.name || "");
                infowindow.open(map);
            });
        };

        initMap();
    }, [coordinates, nameQuerry]); // Run effect when coordinates change

    return (
        <div>
            <div style={{ height: '50vh', width: '100%' }} id="map"></div>
        </div>

    );
}

export default GoogleMaps;
