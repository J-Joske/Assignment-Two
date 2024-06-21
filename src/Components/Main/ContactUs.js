import React from 'react';
import ContactUsPicture from '../Images/contact-us-image.webp';
import '../../Styles/ContactUs_Styles.css';

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <section id="ContactUsSection">
            <h2>CONTACT US</h2>
            <img className="ContactUsPicture" src={ContactUsPicture} alt="contact us"></img>
            </section>
        </div>
    );
};

export default ContactUs;