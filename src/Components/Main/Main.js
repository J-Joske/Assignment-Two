import React from "react";
import AboutUs from "./AboutUs";
import BehindTheScenes from "./BehindTheScenes";
import GameStats from "./GameStats";
import PlayerProfiles from "./PlayerProfiles";
import Socials from "./Socials";
import Membership from "./Membership";
import ContactUs from "./ContactUs";

const Main = () => {
    return(
        <div className="MainSection">
            <AboutUs />
            <BehindTheScenes />
            <GameStats />
            <PlayerProfiles />
            <Socials />
            <Membership />
            <ContactUs />
        </div>
    );
};

export default Main;