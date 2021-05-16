import './Welcomepage.css';
import React from 'react';
import { Button } from 'reactstrap';


function Welcomepage() {
    return (
        <div className="container-1">
            <div className="header-logo">
                <i class="fas fa-peace"> SAFETY APP</i>
            </div>

            <section className="statement left" >
                <h3>HOW TO PROTECT YOURSELF AND FAMILY</h3>
                <p>Learning about a city or area ahead of time will allow
                 you to make well guided decisions on whether you 
                should travel or enter an area ahead of time. 
                Staying informed is a key skill to maintaining the 
                safety and happiness of your family and friends.</p>
            </section>

            <section className="statement right" >
                <h3>SAFETY, FREEDOM, PEACE, LONGEVITY</h3>
                <p>We aim to provide people with the means and
                 tools to enter a state of being free from danger
                  or threat.</p>
            </section>

            <img src="./images/temp_skyline.svg" alt="A city skyline." className="skyline-img" />
            <Button  className="start-btn" size="lg">START NOW</Button>
        </div>
    )
}

export default Welcomepage;
