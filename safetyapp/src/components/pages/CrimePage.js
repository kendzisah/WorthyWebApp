import './CrimePage.css';
//import CrimeData from '../data/CrimeData';
import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';


function CrimePage() {
    
    const {
        data,
        isPending,
        error
    } = useFetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json');
   



    return (
        <div className="crime-page">
            {error && <div className="err-msg"> { error } </div> }
            {isPending && <div className="loading-page">Loading... </div> } 
            

            {
                !isPending && <form>
                    <label for="address">Enter Address: </label><br/>
                    <input type="type" id="adress" name="address" />
                    <label for="state">State: </label><br/>
                    <select id="state" name="state">
                        {data.map(() => (
                            <option key={data.abbreviation}> {data.name} </option>
                        ))}
                    </select>
                </form>
            }
            
        </div>
    )
}

export default CrimePage;
