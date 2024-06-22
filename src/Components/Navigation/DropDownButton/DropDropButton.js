import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import './DropDownButton.css';

//toggle chevron icon up and down / open and close the button
const DropDownButton = ({children, open, toggle}) => {
    return (
        <div onClick ={toggle} className={`dropDownBtn ${open ? "buttonOpen" : null}`}>
            {children} 
             <span className="toggleIcon">
                {open ? <FaChevronUp /> : <FaChevronDown />}

            </span>
        </div>
    )
};

export default DropDownButton;
