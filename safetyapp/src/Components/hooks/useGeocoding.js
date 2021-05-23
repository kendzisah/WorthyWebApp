import useFetch from './useFetch';
import { useState } from 'react';


const useGeocoding = (location, apiKey) => {
    var coordinates = [];
    var longitude, latitude;
    
    const {
        data,
        isPending
    } = useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(location)}.json?limit=1&access_token=${apiKey}`);
    
    if(!isPending)
    {
        coordinates = data.features[0].geometry.coordinates;
        longitude = coordinates[0];
        latitude = coordinates[1];
    }
    // console.log(longitude);
    // console.log(latitude);
    
    
    return{
        longitude,
        latitude
    }
    
};


export default useGeocoding;