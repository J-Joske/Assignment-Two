// import React from "react";
import React, { useState, useEffect } from 'react';
import HomeOfRichmond from "../Images/home_of_richmond.png";
import "../../Styles/Navigation_Styles.css";
import {NavigationItems} from '../Footer/Footer.js';

console.log(HomeOfRichmond);


// hide menubar on scroll

    const ScrollNavbar = () => {
     
      const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
      const [top, setTop] = useState(0);
      useEffect(() => {
        
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            setTop(0); 
          } else {
            setTop(-50);
          }
          setPrevScrollpos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollpos]);

      // Styles for the navbar
      const navbarStyle = {
        backgroundColor: 'black',
        position: 'fixed',
        top: `${top}px`,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'top 0.3s',
      };
    
    return(
        // Navigation bar split into three divs for ease of styling
        <div id="navbar" style={navbarStyle}>
            
                <img className="navigationImage" src={HomeOfRichmond} alt="A Richmond shield logo"></img>


                {/* map the menu array into a list from the footer*/}
                <div className="navigationList"> 
                <ul>
                    {NavigationItems.map((menuItem, index) => (
                        <li key={index}>
                            <a href={menuItem.link}>{menuItem.menuItem}</a>
                            </li>
                    ))}
                </ul>
            </div>

            <div className="searchBar"> 

            </div>

                </div> 
        
    );
} 
export default ScrollNavbar;