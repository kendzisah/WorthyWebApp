import './CrimePage.css';
import CrimeData from '../data/CrimeData';
import React from 'react';
import { useState } from 'react';
import useGeocoding from '../hooks/useGeocoding';
import useFetch from '../hooks/useFetch';
import { Button } from 'reactstrap';
import Years from '../data/YearData';


function CrimePage() {
    
    const [location, setLocation] = useState("AL");
    const [from, setFrom] = useState("");
    const [until, setUntil] = useState("");
 
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

    const {
        startYears,
        endYears
    } = Years;

    const crimeData = CrimeData(location, from, until);

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
                    <label for="state">State: </label><br/>
                    <select id="state" name="state" placeholder="Select State" onChange={ (e) => setLocation(e.target.value)} required>
                        {
                            data.map((states) => (
                                 <option value={ states.abbreviation } key={states.abbreviation}> { states.name } </option>
        
                            ))
                        }
                    </select>
                    <label for="since">From: </label><br/>
                    <select id="since" name="state" placeholder="Select Year" onChange={ (e) => setFrom(e.target.value)} required>
                        {
                            startYears.map((startYears) => (
                                 <option value={ startYears.year } key={startYears.key}> { startYears.year } </option>
        
                            ))
                        }
                    </select>
                    <label for="until">Until: </label><br/>
                    <select id="until" name="until" placeholder="Select Year" onChange={ (e) => setUntil(e.target.value)} required>
                        {
                            endYears.map((endYears) => (
                                 <option value={ endYears.year } key={endYears.key}> { endYears.year } </option>
        
                            ))
                        }
                    </select>
                    <Button outline color="secondary"  className="search-btn"><i className="fas fa-search"></i></Button>
                </form>
            }
            
            
        </div>
    )
}

export default CrimePage;
