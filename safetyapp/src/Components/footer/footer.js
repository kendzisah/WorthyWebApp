import './footer.css';
import React from 'react';



function footer() {
    return (
        <div className="footer-container">
            
            <div className="Section-Containers">
                <h3 className="Footer-Subtitles">COMPANY INFO</h3>
                <p>
                    Web agency cofnkdlfn  fdgnl <br></br>
                    sdfa fdf dfsdadfsdf sa fsdf <br></br>
                    fsdafasdfds sdfdsafdsff <br></br>
                    fsafdsafdfasfddfgfdbgsbb <br></br>
                </p>
            </div>

            <div className="Section-Containers">
                <h3 className="Footer-Subtitles">CONTACT INFO</h3>
                <p>
                <span class="fas fa-map"></span> Web agency cofnkdlfn  fdgnl <br></br>
                <span class="fas fa-mobile"></span> sdfa fdf dfsdadfsdf sa fsdf <br></br>
                <span class="fas fa-envelope"></span> fsdafasdfds sdfdsafdsff <br></br>
                <span class="fas fa-building"></span> fsafdsafdfasfddfgfdbgsbb <br></br>
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
                    cols="70"
                    />
                </form>

            </div>
            
        </div>
    )
}



export default footer;
