import React from 'react';
import './DropDownItems.css';

const DropDownItem = ({children, onClick}) => {
    return (
        <div className='dropdownItem' onClick={onClick}>
            {children}
        </div>
    )
}
export default DropDownItem;