import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import './collapse.scss';

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse`} key={title}>
            <button className="collapse-title" >
                {title}
                {isOpen ? <FaChevronDown className='chevron' onClick={toggleState} /> : <FaChevronUp className='chevron' onClick={toggleState} />}
            </button>
            {isOpen && (
                <div className={`collapse-content${isOpen ? ' open' : ''}`}>
                    {content}
                </div>
            )}
        </div>
    );
}

export default Collapse;
