import React from 'react';
import HomeOfRichmond from "../Images/home_of_richmond.png";
import "../../Styles/Navigation_Styles.css";

console.log(HomeOfRichmond);


export default function Navigation (){
return(
    <div className="Navigation">

            <img className="navigationImage" src={HomeOfRichmond} alt="A Richmond shield logo"></img>

        <div className="navigationList">
            <ul>
                <li>
                    <a href="/AboutUs">About Us</a>
                    </li>
                <li>
                    <a href="/BehindTheScenes">Behind The Scenes</a>
                    </li>
                <li>
                    <a href="/GameStats">Game Stats</a>
                    </li>
                <li>
                    <a href="/PlayerProfiles">Player Profiles</a>
                    </li>
                <li>
                    <a href="/Socials">Socials</a>
                    </li>
                <li>
                    <a href="/Membership">Membership</a>
                    </li>
                <li>
                    <a href="/ContactUs">Contact Us</a>
                    </li>
            </ul>
        </div>


    </div>
);
};
