import React from "react";
import RichmondHeader from "../Images/richmond-header.png";

console.log(RichmondHeader);

export default function Header() {
    return (
        <div className="Header">
            <div className="richmondHeader">
            <img src={RichmondHeader} alt="Richmond with claw marks"></img>
            </div>
        </div>
    );
}