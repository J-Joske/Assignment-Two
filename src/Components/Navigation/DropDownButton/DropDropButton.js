import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import './DropDownButton.css';

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
