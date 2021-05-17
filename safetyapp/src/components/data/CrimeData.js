import React from 'react';
import { useState, useEffect } from 'react';


const CrimeData = (props) => {
    
    const [stateArson, setStateArson] = useState(null);
    const [stateArrest, setStateArrest] = useState(null);


    useEffect(() => {
         fetch('/IYTSZ6B2pdcXLEs9cgigPdN8KuYrPPzh6GWQ97aE/data/arrest/states/offense/{stateAbbr}/{variable}/{since}/{until}')
         .then(res => {
            return res.json();
         })
         .then(data => {
            setStateArrest(data);
        })
         .catch();


    }, [props.CrimeData]);

    return (
       <div>
            
       </div>
    );
}


export default CrimeData;