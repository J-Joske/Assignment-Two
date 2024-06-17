import React from "react";
import HomeOfRichmond from "../Images/home_of_richmond.png";

console.log(HomeOfRichmond);


export default function Navigation() {
    return(
        // Navigation bar split into three divs for ease of styling
        <div className="Navigation">
            <div className="navigationImage">
                <img src={HomeOfRichmond} alt="A Richmond shield logo"></img>
            </div>

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

            <div className="searchBar"> 

            </div>

        </div>
    );
}