import React from 'react';
import '../../Styles/AboutUs_Styles.css';
import VflTeam from '../Images/vfl-team.png';
import TeamWin from '../Images/win-image.avif';
import TeamCelebrate from '../Images/celebrate.avif';

const AboutUs = () => {
    return (
        <div className="AboutUs">

            <h2>ABOUT US</h2>

            <div className="AboutUsArticle">
                <img className="aboutUsImages" src={VflTeam} alt="Richmond VFL Team"></img>
                <h3>HISTORY</h3>
                <p className="aboutUsContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec orci nulla. In a mollis nunc. Fusce nec eros lobortis, dapibus ligula vel, dapibus ex. Curabitur diam mi, faucibus eget urna eu, feugiat tincidunt erat. Aliquam eu sodales purus, ac feugiat nisl. Quisque auctor consectetur tempor. Sed facilisis mi nisl. Sed tempus volutpat lacinia. Suspendisse egesta</p>

            </div>

            <div className="AboutUsArticle">
                <img className="aboutUsImages" src={TeamWin} alt="Team Winning"></img>
                <h3>WHO WE ARE</h3>
                <p className="aboutUsContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec orci nulla. In a mollis nunc. Fusce nec eros lobortis, dapibus ligula vel, dapibus ex. Curabitur diam mi, faucibus eget urna eu, feugiat tincidunt erat. Aliquam eu sodales purus, ac feugiat nisl. Quisque auctor consectetur tempor. Sed facilisis mi nisl. Sed tempus volutpat lacinia. Suspendisse egesta</p>

            </div>

            <div className="AboutUsArticle">
                <img className="aboutUsImages" src={TeamCelebrate} alt="Team celebrating"></img>
                <h3>RICHMOND</h3>
                <p className="aboutUsContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec orci nulla. In a mollis nunc. Fusce nec eros lobortis, dapibus ligula vel, dapibus ex. Curabitur diam mi, faucibus eget urna eu, feugiat tincidunt erat. Aliquam eu sodales purus, ac feugiat nisl. Quisque auctor consectetur tempor. Sed facilisis mi nisl. Sed tempus volutpat lacinia. Suspendisse egesta</p>

            </div>

        </div>
    );
};

export default AboutUs;