import React, { useState } from 'react';
import Map from './Map';
import Places from './Places';

const TerminalMap = () => {
    const [zoom, setZoom] = useState(14)
    const [center, setCenter] = useState({
        lat: 40.3850,
        lng: 49.8687
    });

    return (
        <section className='terminal_map_section'>
            <div className="terminal_map_section_heading">
                <h1>Terminal <span>xəritəsi</span></h1>
                <p>Günbəgün sənə daha yaxın oluruq!</p>
            </div>
            <div className='terminals_map_container'>
                <Places 
                    setZoom={setZoom} 
                    setCenter={setCenter} 
                />
                <Map 
                    center={center} 
                    setCenter={setCenter}
                    zoom={zoom} 
                    setZoom={setZoom}
                />
            </div>
        </section>
    )
}

export default TerminalMap;