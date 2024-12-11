import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

import Collapse from '../collapse/collapse';
import Erreur from '../../page/erreur/erreur';
import Modal from '../modal/modal';

import './infoLogement.scss';
import '../modal/modal.scss';

function InfoLogement({ logements }) {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Erreur />;
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    function ratingToStars(nbStars) {
        return Array.from({ length: 5 }, (_, index) => (
            index < nbStars ? (
                <FaStar key={index} className="main-color" />
            ) : (
                <FaStar key={index} className="main-scd-color" />
            )
        ));
    }

    return (
        <main className="container">
            <div className="gallery-card">
                <div className="carousel">
                    {logement.pictures.length > 1 && (
                        <button className="btn-left" aria-label="Afficher l'image précédente" onClick={prevImage}>
                            <FaChevronLeft />
                        </button>
                    )}
                    <img
                        className="carousel-image"
                        src={logement.pictures[currentImageIndex]}
                        alt={`Logement ${currentImageIndex + 1}`}
                        onClick={openModal}
                    />
                    {logement.pictures.length > 1 && (
                        <button className="btn-right" aria-label="Afficher l'image suivante" onClick={nextImage}>
                            <FaChevronRight />
                        </button>
                    )}
                    {logement.pictures.length > 1 && (
                        <p className="carousel-index">
                            {currentImageIndex + 1} / {logement.pictures.length}
                        </p>
                    )}
                </div>

                {isModalOpen && (
                    <Modal
                        logement={logement}
                        closeModal={closeModal}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                    />
                )}


                <div className="informations-logement">
                    <div className="title-location-tags">
                        <div>
                            <p className="title">{logement.title}</p>
                            <p className="location">{logement.location}</p>
                        </div>
                        <div className="tags-container">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tags">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="host-rating">
                        <div className="host">
                            <p className="name">{logement.host.name}</p>
                            <img className="picture" src={logement.host.picture} alt="Host" />
                        </div>
                        <span className="rating">{ratingToStars(logement.rating)}</span>
                    </div>
                </div>

                <div className="collapse-logement">
                    <Collapse key={`description-${logement.id}`} className="collapse-description" title={'Description'} content={logement.description} />
                    <Collapse key={`equipments-${logement.id}`} className="collapse-equipments" title={'Equipements'} content={
                        <ul className="equipments">
                            {logement.equipments.map((equipment, item) => (
                                <li key={item}>{equipment}</li>
                            ))}
                        </ul>
                    } />
                </div>
            </div>
        </main>
    );
}

export default InfoLogement;
