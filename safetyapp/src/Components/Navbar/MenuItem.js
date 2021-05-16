
<div>{
/*
Quick things I picked up
- These are list of menu items that my navbar js will call to populate the navbar
- export keyword is KEY it is how we will return this list to be used in navbar.js
- Each curly bracket is there own menu item
- the title, url, and cname are just variable names 
- make sure to fill the url links
- the cname field is for specifying the cname for when we import it into the container check navbar.js for more details

Questions
- Q: USING ARRAY BRACKETS SO IS THIS HOW WE DO ARRAY IN JS? OR IS THIS JSON?
- Q: NOT SURE WHAT LANGUAGE THIS IS, JSON? 
- Q: WHERE WOULD I CHANGE THE FONT AND SIZE OF TITLE
*/
}</div>

export const MenuItems =

[  
    {
        title: 'Home',
        url: '#',  
        cName: 'nav-links',
        icon: './Icons/Home.png'
    },
    {
        title: 'Search',
        url: '#',
        cName: 'nav-links',
        icon: "../Icons/Search.png"
    },
    {
        title: 'About',
        url: '#',
        cName: 'nav-links',
        icon: '.Icons/About.png'
    }
]

