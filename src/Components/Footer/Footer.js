import React from "react";
import Swinburne from '../Images/swinburne-logo.png';
import Afl from '../Images/afl-logo.png';
import Facebook from '../Images/icon-fb.png';
import Instagram from '../Images/icon-ig.png';
import Twitter from '../Images/icon-x.png';
import Youtube from '../Images/icon-yt.png';
import '../../Styles/Footer_Styles.css';


// array for the navigation menu list
const NavigationItems = [
    {menuItem: 'About Us', link: '#AboutUsSection'},
    {menuItem: 'Behind The Scenes', link: '#BehindTheScenesSection'},
    {menuItem: 'Game Stats', link: '#GameStatsSection'},
    {menuItem: 'Player Profiles', link: '#PlayerProfilesSection'},
    {menuItem: 'Membership', link: '#MembershipSection'},
    {menuItem: 'Contact Us', link: '#ContactUsSection'},
]
// array for the social media icons
const SocialIcons = [
    { src: Facebook, alt:'Facebook', link:'https://www.facebook.com/Richmond.FC/', className:'iconImage'},
    { src: Instagram, alt:'Instagram', link: 'https://www.instagram.com/richmond_fc/?hl=en', className:'iconImage'},
    { src: Youtube, alt: 'youtube', link: 'https://www.youtube.com/@Richmond_Football_Club', className:'iconImage'},
    { src: Twitter, alt: 'X', link: 'https://x.com/Richmond_FC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', className:'iconImage'},

]

export default function Footer() {
    return (
        <div className="Footer">

            <div className="ftMain">

            <div className="ftMainItem">
                <h4 className="ftTitle">Navigation</h4>

                {/* map the menu array into a list*/}
            <div className="FooterMenu"> 
                <ul>
                    {NavigationItems.map((menuItem, index) => (
                        <li key={index}>
                            <a href={menuItem.link}>{menuItem.menuItem}</a>
                            </li>
                    ))}
                </ul>
            </div>
            </div>

            <div className="ftMainItem">

                <h4>Acknowledgement of Country</h4>

            <p className="acknowledgement">We extend our deepest respect to First Peoples and Traditional Owners of the land, air and waterways where we live and work.</p>
            </div>
            
            {/* sponsor section of footer*/}
            <div className="ftMainItem">
            <h4 className="ftTitle">Sponsors</h4>
            <ul>
                <li>
                    <a href="https://www.afl.com.au/"> <img className="footerLogo" src={Afl} alt="AFL logo"></img></a>
                    <a href="https://www.swinburneonline.edu.au/"> <img className="footerLogo" src={Swinburne} alt="Swinburne logo"></img></a>
                </li>
            </ul>
            </div>
            </div>

            {/* map the icon array to a list */}
            <div className="ftSocials">

                <div className="socialIcons">
                    <ul className="socialIconsList">
                        {SocialIcons.map((icon, indexSocial) => (
                            <li key={indexSocial} className={icon.className}>
                                <a href={icon.link} target="_blank" rel="noopener noreferrer"><img src={icon.src} alt={icon.alt}/></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* legal information */}
            <div className="ftLegal">

                <ul className="legalList">
                <li>Terms and Conditions</li>
                <li>Privacy Statement</li>
                <li>&copy; 2024 Copyright Jarrod Joske</li>
                    </ul>

            </div>
        </div>
    );
}
export {NavigationItems};