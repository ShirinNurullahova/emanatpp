import React, { useState } from 'react';
import Geocode from "react-geocode";
import terminalsData from './data/terminals-data.json';

Geocode.setApiKey("AIzaSyBJz3MiGOsO2sN8HCbINXvJpzcNh6eTSs8");
Geocode.setLanguage("en");
// Geocode.setRegion("az");

const Places = ({ setZoom, setCenter }) => {
    const [input, setInput] = useState();
    const markers = document.getElementsByClassName("marker_elem");

    function getLocation(e) {
        e.preventDefault();
        Geocode.fromAddress(input).then(
            (response) => {
                setCenter(response.results[0].geometry.location);
                setZoom(15);
            },
            (error) => { }
        );
    }

    function getLocationLngLat(loc) {
        const lat = loc[1];
        const lng = loc[0];
        setCenter({ lat, lng })
        setZoom(18);
        for (const marker of markers) {
            if (marker.className.includes("selected_marker")) {
                marker.classList.remove("selected_marker");
            }
            if (+marker.getAttribute('lat') === lat && +marker.getAttribute('lng')) {
                marker.classList.add("selected_marker");
            }
        }
    }

    return (
        <div className='places_container'>
            <div className='select_place_options'>
                <button className='address_button'>
                    <form onSubmit={getLocation}>
                        <input
                            type="text"
                            autoComplete='false'
                            placeholder='Ünvan'
                            onChange={e => setInput(e.target.value)}
                        />
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.5L6 8.5L10 4.5" stroke="#0A66B5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </form>
                </button>
                <button className='street_button'>
                    <form onSubmit={getLocation}>
                        <input
                            type="text"
                            autoComplete='false'
                            placeholder='Küçə'
                            onChange={e => setInput(e.target.value)}
                        />
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.5L6 8.5L10 4.5" stroke="#0A66B5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </form>
                </button>
            </div>
            <div className='places_list'>
                {terminalsData.features.map((terminal, index) => (
                    <div key={index} className='place_item' onClick={() => getLocationLngLat(terminal.geometry.coordinates)}>
                        <h3>{terminal.properties.description.split(',')[0]}</h3>
                        <p>{terminal.properties.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Places;