import React from 'react';
import RichmondFans from '../Images/richmon-fans.avif';
import '../../Styles/Membership_Styles.css';
import Button from './SubmitButton';

const Membership = () => {
    return (
        <div className="Membership">
            <section id="MembershipSection">
            <h2>MEMBERSHIP</h2>
            <img className="richmondFans" src={RichmondFans} alt="fans"></img>
            </section>
            <Button />
        </div>
    );
};

export default Membership;