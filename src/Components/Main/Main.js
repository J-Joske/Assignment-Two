import React from "react";
import AboutUs from "./AboutUs";
import BehindTheScenes from "./BehindTheScenes";
import GameStats from "./GameStats";
import PlayerProfiles from "./PlayerProfiles";
import Socials from "./Socials";
import Membership from "./Membership";
import ContactUs from "./ContactUs";
import '../../Styles/Main_Styles.css';

const Main = () => {
    return(
        <div className="MainSection">
            <AboutUs />
            <BehindTheScenes />
            <div className="gameStatsPlayerProfiles">
            <GameStats />
            <PlayerProfiles />
            </div>
            <Socials />
            <div className="membershipContactUs">
            <Membership />
            <ContactUs />
            </div>
        </div>
    );
};

export default Main;