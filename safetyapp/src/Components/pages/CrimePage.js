import './CrimePage.css';
//import CrimeData from '../data/CrimeData';
import React from 'react';
import { useState } from 'react';
import useGeocoding from '../hooks/useGeocoding';
import useFetch from '../hooks/useFetch';
import { Button } from 'reactstrap';


function CrimePage() {
    
    const [location, setLocation] = useState("Arizona");

    const mapboxAPIKey = "pk.eyJ1Ijoia2VuZHppc2FoIiwiYSI6ImNrb3lyYmZ2YzBvaWMyeHIxYzFibDU1aWEifQ.qHMjuWH9I8PaVQVL0uDPjA";

    const {
        data,
        isPending,
        error
    } = useFetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json') || {};
   
    const {
        longitude,
        latitude
    } = useGeocoding(location, mapboxAPIKey) || {};

    return (
        <div className="crime-page">
            {error && <div className="err-msg"> { error } </div> }
            
            
            <div className="sub-header">
                <i className="fas fa-peace spin"></i>
                <span className="logo-text"> SAFETY APP</span>
            </div>


            {isPending && <div className="loading-page">Loading... </div> } 
            
            { !isPending && 
            
                <form className="form-inline">
                    <label for="address">Street Address (optional): </label><br/>
                    <input type="type" id="adress" name="address" />
                    <label for="city">City: *</label><br/>
                    <input type="type" id="city" name="city" required/>
                    <label for="state">State: </label><br/>
                    <select id="state" name="state" placeholder="Select State" onChange={ (e) => setLocation(e.target.value)} required>
                        {
                            data.map((states) => (
                                 <option value={ states.name } key={states.abbreviation}> { states.name } </option>
        
                            ))
                        }
                    </select>
                    <Button outline color="secondary" onClick={console.log(data.name)} className="search-btn"><i className="fas fa-search"></i></Button>
                </form>
            }
            
        </div>
    )
}

export default CrimePage;
