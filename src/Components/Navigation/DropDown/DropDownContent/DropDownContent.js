import React from 'react';
import './DropDownContent.css';

const DropDownContent = ({children, open}) => {
    return (
    <div className={`dropDownContent ${open ? "contentOpen" : null}`}>
        {children}
    </div>
    );
};

export default DropDownContent;