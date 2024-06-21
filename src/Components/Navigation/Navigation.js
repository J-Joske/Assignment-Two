import React from "react";
import HomeOfRichmond from "../Images/home_of_richmond.png";
import "../../Styles/Navigation_Styles.css";
import {NavigationItems} from '../Footer/Footer.js';

console.log(HomeOfRichmond);


export default function Navigation() {
    return(
        // Navigation bar split into three divs for ease of styling
        <div className="Navigation">
            
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