import React from "react";
import '../../Styles/Header_Styles.css';
import RichmondHeader from "../Images/richmond-header.png";
import RichmondLogo from "../Images/logo-Richmond-Tigers.png";

console.log(RichmondHeader);

export default function Header() {
    return (
        <div className="Header">
            <img className="richmondHeaderLogo" src={RichmondHeader} alt="Richmond with claw marks"></img>
            <img className="richmondLogo" src={RichmondLogo} alt="richmond logo"></img>
        </div>
    );
}