import './footer.css';
import React from 'react';



function footer() {
    return (
        <div className="footer-container">
            
            <div className="Section-Containers">
                <h3 className="Footer-Subtitles">COMPANY INFO</h3>
                <p>
                    Web Agnecy Firm From 2021 to 2021 <br></br>
                    In cooporation with justice and peace <br></br>
                    All information is provided by CrimeData.com <br></br>
                    CopyRight &copy; 2021 SafetyApp | All rights reserved <br></br>
                </p>
            </div>

            <div className="Section-Containers">
                <h3 className="Footer-Subtitles">CONTACT INFO</h3>
                <p>
                <span class="fas fa-map"></span> 10001 SafetyApp Web Agency St, AZ <br></br>
                <span class="fas fa-mobile"></span> SafetyApp.org <br></br>
                <span class="fas fa-envelope"></span> safetyapp_support@safetyapp.com <br></br>
                <span class="fas fa-building"></span> +1-123-456-7890 <br></br>
                </p>
            </div>

            <div className="Section-Containers">
                <h3 className="Footer-Subtitles">SEND US A MESSAGE</h3>
                
                <form className="Message-Form">
                    
                    <div className="Name-Input">
                        <input 
                            type="text" 
                            size="35"
                            maxLength="30"
                            placeholder=" Your Name..."    
                        />
                        <span class="fas fa-user"></span>
                    </div>

                    <div className="Email-Input">
                        <input 
                            type="text" 
                            size="35"
                            maxLength="30"
                            placeholder=" Your Email Adress..."
                        />
                        <span class="fas fa-envelope"></span>
                    </div>

                    <textarea 
                    type="text"
                    rows="6"
                    cols="80"
                    />
                </form>

            </div>
            
        </div>
    )
}



export default footer;
