import React from 'react';
import './Checkbox.scss';

const Checkbox = ({name, className}) => {
return (
    <li className={className}>
        {/* <input type="checkbox" className="check"></input> */}
        <label><input type="checkbox" className="check" id="checkbox"></input>{name}</label>
    </li>
        
    
)
};


export default Checkbox;