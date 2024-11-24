import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/ContentAbout.css";

function ContentAbout() {
    // Un objet pour gérer l'état de chaque section
    const [openSections, setOpenSections] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite: false,
    });

    // Fonction pour gérer le clic sur une section
    const toggleSection = (section) => {
        setOpenSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],  // Change l'état de la section cliquée
        }));
    };

    return (
        <div className="content-about">

            <div className="select-content">
                <button className="select-title">
                    Fiabilité
                    {openSections.fiabilite ? <FaChevronUp onClick={() => toggleSection("fiabilite")}/> : <FaChevronDown onClick={() => toggleSection("fiabilite")}/>}
                </button>
                {openSections.fiabilite && (
                    <div className="select-text">
                        <p>
                            Les annonces postées sur Kasa garantissent une fiabilité totale.
                            Les photos sont conformes aux logements, et toutes les
                            informations sont régulièrement vérifiées par nos équipes.
                        </p>
                    </div>
                )}
            </div>

            <div className="select-content">
                <button className="select-title">
                    Respect
                    {openSections.fiabilite ? <FaChevronUp onClick={() => toggleSection("respect")}/> : <FaChevronDown onClick={() => toggleSection("respect")}/>}
                </button>
                {openSections.respect && (
                    <div className="select-text">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                            comportement discriminatoire ou de perturbation du voisinage
                            entraînera une exclusion de notre plateforme.
                        </p>
                    </div>
                )}
            </div>

            <div className="select-content">
                <button className="select-title" >
                    Service
                    {openSections.service ? <FaChevronUp onClick={() => toggleSection("service")}/> : <FaChevronDown onClick={() => toggleSection("service")}/>}
                </button>
                {openSections.service && (
                    <div className="select-text">
                        <p>
                            La qualité du service est au cœur de notre engagement chez Kasa.
                            Nous veillons à ce que chaque interaction, que ce soit avec nos
                            hôtes ou nos locataires, soit empreinte de respect et de
                            bienveillance.
                        </p>
                    </div>
                )}
            </div>

            <div className="select-content">
                <button className="select-title">
                    Sécurité
                    {openSections.securite ? <FaChevronUp onClick={() => toggleSection("securite")}/> : <FaChevronDown onClick={() => toggleSection("securite")}/>}
                </button>
                {openSections.securite && (
                    <div className="select-text">
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                            pour les voyageurs, chaque logement correspond aux critères de
                            sécurité établis par nos services. En laissant une note aussi bien
                            à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                            que les standards sont bien respectés. Nous organisons également
                            des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContentAbout;
