import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../Collapse/collapse.scss';

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse" key={title}>
            <button className="collapse-title" >
                {title}
                {isOpen ? <FaChevronDown onClick={() => toggleState(isOpen)} /> : <FaChevronUp onClick={() => toggleState(isOpen)} />}
            </button>
            <div className={`collapse-content ${isOpen ? ' open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;
