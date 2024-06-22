import {useState, useEffect, useRef} from 'react';
import DropDownButton from '../../DropDownButton/DropDropButton';
import DropDownContent from '../DropDownContent/DropDownContent';
import './DropDown.css';

const DropDown = ({buttonText, content}) => {

const [open, setOpen] = useState(false);

const dropdownRef = useRef();

const toggleDropdown = () => {
setOpen((open) => !open);
};


useEffect (() => {
    const handler = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains
            (event.target)) { setOpen(false);
            }
        };

            document.addEventListener('click', handler);

            return () => {
                document.removeEventListener('click', handler);
            };
    
}, []);

    return (

    <div className="dropDownMenu" ref={dropdownRef}>
        
        <DropDownButton toggle={toggleDropdown} open={open}>
            {buttonText}

        </DropDownButton>

        <DropDownContent open={open}>
            {content}

        </DropDownContent>

        
    </div>
    );
};

export default DropDown;