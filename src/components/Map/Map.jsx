import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

export function Map() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const [coordinates, setCoordinates] = useState({ lat: 52.0896384819873, lng: 4.383999199964406 })
    const zoom = 7
    function handleClick(ev) {
        setCoordinates(stores[ev]);

    }
    const stores = [
        { place: 'Westfield Nl', lat: 52.0896384819873, lng: 4.383999199964406 },
        { place: 'de Bijenkorf Amstelveen', lat: 52.30432867977221, lng: 4.859228046024642 },
        { place: 'de Bijenkorf Amsterdam', lat: 52.37440430027517, lng: 4.894416169316905 },
        { place: 'Westfield UK', lat: 51.50737373873606, lng: -0.22111032432724173 },
        { place: 'Harrods', lat: 51.50021222547184, lng: -0.16311097845632053 },
        { place: "Selfridges UK", lat: 51.514590117422905, lng: -0.15279916928722423 },
        { place: 'El corte ingles', lat: 41.385769004316906, lng: 2.1727254291457028 }
    ]
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '60%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCF_57rzx339nMeHxVEJqQ_fyh43L2Sxlc" }}
                center={coordinates}
                defaultZoom={zoom}
                onChildClick={handleClick}
            >
                {stores.map(({ lat, lng }, idx) =>
                    <AnyReactComponent
                        key={idx}
                        lat={lat}
                        lng={lng}
                        text="📍"

                    />)}
            </GoogleMapReact>
        </div>
    );
}

