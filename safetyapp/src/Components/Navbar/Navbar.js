import './Navbar.css';
import React, { Component } from 'react'
import { MenuItems } from './MenuItem.js'

class Navbar extends Component 
{        
    render() 
    {
        return  (            
            <nav className="NavbarItems">
                <div>{/*Populating navbar*/}</div>
                <ul class="Items">
                    {   
                        MenuItems.map
                        (
                            (item, index) => {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            <img src={item.icon} alt="" width="40" height="40"></img>
                                        </a>
                                        <div>{/*Needed another 'a' tag to be able to add the title underneath the image; would be better if I can add these to one hyper link with words at bottom*/}</div>
                                        <a className="Links" href={item.url}>
                                            <h5>{item.title}</h5>
                                        </a>
                                    </li> 
                                )
                            }
                        )
                    } 
                </ul>
            </nav>                   
        )

    }
}

<div>{
/*
<img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
         width=150" height="70">
Quick things I picked up
- We created the navbar using class method, could have also been done using a function
- use className in first tag to name that container
- the ending tag will have /
- almost everything is done in tags
- always need a render
- imrc and rfmcare shortcuts to type the react statement <3>
- for arrow function everything in brackets is paramaters, and everything after arrow is the body of the function
- ul tag is how we create an array of unordered elements, we then populate the ul with li tags(list items)
- we can have code blocks within tags
- 'a' tag is to insert a hyper link
- href is to insert the hyperlink into the 'a' tag
- NOTE 'item' and 'index' in the .map block are part of the map method, and they paramters in the arrow function; map methods need the arrow function to tranlate the array elements to the new array
- item is first param it represent every element in menuitems.js, and since index is second it represents the current element being processed in array(this is an optional param)
- apparently would have been better to use for each loop instead of .map but oh well
- Note we are returning li's to ul tags when we are doing the map function
- every list item needs key so theyll be able to be accessed

Questions: 
Q: WHATS A RENDER
Q: HAVE TO RETURN SOMETHING TO RENDER; DONT KNOW WHAT YET
Q: DONT KNOW WHY WERE PUTTING REACT MIGHT HAVE TO CHANGE THAT TO AN IMAGE OF OURS<11>
Q: SEARCH WHAT MAP IS
    A: .map is method array.prototype and it create a new array using the elements of the array that calling it and what ever you want to do to those elements
    - it acts as a loop on the elements till we have accessed the last element in array that called it
*/
}</div>

export default Navbar