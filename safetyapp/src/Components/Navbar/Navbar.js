import './navbar.css';
//imrc is shortcut to type this react statement
import React, { Component } from 'react'
import { MenuItems } from './MenuItem.js'


//this was creating a navbar using function
//jsx format for doing a function
//return value is navbar
/*
const navbar = () => {
    return (
        <div>
            
        </div>
    )
}
*/

//creating a navbar using class method
//since we are doing it the class way needs to derive component class
class Navbar extends Component 
{        
    //always need a render Q: WHATS A RENDER
    render() 
    {
        //return something Q: DONT KNOW WHAT YET
        return  
        (
            //dont get this confused with nav bar, this is a tag for navigation links
            //also to give a container a variable name we use className; see how nav var name is navbar items, and beloow that the h1 var name is navbar logo
            //notice nav link is our top most container in this class
            <nav className="NavbarItems">
                //Q: DONT KNOW WHY WERE PUTTING REACT MIGHT HAVE TO CHANGE THAT TO AN IMAGE OF OURS
                <h1 className="Navbar-logo">React</h1>
                <div className="Menu-Icon">
                    //In this div we will have something later 
                </div>
                // ul tag is how we create an array of unordered elements, we then populate the ul with li tags(list items)
                <ul>
                    //a tag is to insert a hyper link
                   <li><a href=""></a></li> 
                </ul>


            </nav>                   
            

        )

    }
}

//this was for if we did it the function way
//export default navbar

/*
Quick things I picked up
- use className in first tag to name that container
- the ending tag will have /
- almost everything is done in tags
*/