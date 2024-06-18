import React from 'react';
import RichmondFans from '../Images/richmon-fans.avif';
import '../../Styles/Membership_Styles.css';

const Membership = () => {
    return (
        <div className="Membership">
            <h2>MEMBERSHIP</h2>
            <img className="richmondFans" src={RichmondFans} alt="fans"></img>
        </div>
    );
};

export default Membership;