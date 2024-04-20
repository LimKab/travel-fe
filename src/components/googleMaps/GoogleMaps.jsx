import React, { useEffect } from "react";

function GoogleMaps({ nameQuery }) {
    const google = window.google;

    useEffect(() => {
        let map;
        let service;
        let infowindow;

        const initMap = () => {
            infowindow = new google.maps.InfoWindow();
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
            });

            const request = {
                query: nameQuery,
                fields: ["name", "geometry"],
            };

            service = new google.maps.places.PlacesService(map);
            service.findPlaceFromQuery(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    for (let i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }

                    if (results[0].geometry && results[0].geometry.location) {
                        map.setCenter(results[0].geometry.location);
                    }
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
                infowindow.open(map, marker);
            });
        };

        initMap();
    }, [nameQuery]);

    return (
        <div>
            <div style={{ height: '50vh', width: '100%' }} id="map"></div>
        </div>
    );
}

export default GoogleMaps;
