import './CrimePage.css';
import CrimeData from '../data/CrimeData';
import React from 'react';
import { useState, useEffect } from 'react';


function CrimePage() {
    const [stateAbbr, setStateAbbr] = useState(null);
    const [timePeriod, setTimePeriod] = useState({
        until: null,
        since: null
    });
    const [stateArson, setStateArson] = useState(null);
    const [stateArrest, setStateArrest] = useState(null);

    useEffect(() => {
        fetch(`/IYTSZ6B2pdcXLEs9cgigPdN8KuYrPPzh6GWQ97aE/data/arrest/states/offense/${stateAbbr}/${variable}/${timePeriod.since}/${timePeriod.until}`)
        .then(res => {
           return res.json(); /*This will return a promise with the json value from the api, .json() is asynchronous.*/
        })
        .then(data => {
           setStateArrest(data);
       })
        .catch();


   }, [stateAbbr]);

    return (
        <div>
            {stateAbbr && <CrimeData  /> }
        </div>
    )
}

export default CrimePage;
