import React, { useState } from "react";  
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../Collapse/collapse.scss';
import data from '../../datas/about.json';  

function Collapse({ logement, type }) {
    const [openSections, setOpenSections] = useState({
        description: false,
        equipments: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="collapse">
            {type === "logement" && (
                <div className="collapse-logement">

                    <div>
                        <button className="collapse-title btn-description" onClick={() => toggleSection("description")}>
                            Description
                            {openSections.description ? (
                                <FaChevronDown />
                            ) : (
                                <FaChevronUp />
                            )}
                        </button>
                        <div className={`collapse-text btn-description-text ${openSections.description ? 'open' : ''}`}>
                            <p>{logement.description}</p>
                        </div>
                    </div>

                    <div>
                        <button className="collapse-title btn-equipments" onClick={() => toggleSection("equipments")}>
                            Equipements
                            {openSections.equipments ? (
                                <FaChevronDown />
                            ) : (
                                <FaChevronUp />
                            )}
                        </button>
                        <div className={`collapse-text btn-equipments-text ${openSections.equipments ? 'open' : ''}`}>
                            <div className="equipment-container">
                                {logement.equipments.map((equipment, index) => (
                                    <span key={index} className="equipments">
                                        {equipment}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {type === "about" && (
                <>
                    {data.map((section, index) => (
                        <div className="collapse-about" key={index}>
                            <button className="collapse-title collapse-about-title" onClick={() => toggleSection(index)}>
                                {section.title}
                                {openSections[index] ? <FaChevronDown /> : <FaChevronUp />}
                            </button>
                            <div className={`collapse-text collapse-about-text ${openSections[index] ? 'open' : ''}`}>
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Collapse;
