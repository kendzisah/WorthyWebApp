import useFetch from './useFetch';
import { useState } from 'react';


const useGeocoding = (location, apiKey) => {
    const [coordinates, setCoordinates] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    
    const {
        data,
        isPending
    } = useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(location)}.json?limit=1&access_token=${apiKey}`) || {};
    
    console.log(data);
};


export default useGeocoding;