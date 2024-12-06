import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar, FaTimes } from "react-icons/fa";

import Collapse from '../Collapse/collapse.js';
import Erreur from '../../Page/Erreur/erreur.js';

import "./infoLogement.scss";
import '../Modal/modal.scss';

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

    function ratingToStars(nbStars) {
        return Array.from({ length: 5 }, (_, index) => (
            index < nbStars ? (
                <FaStar key={index} className="main-color" />
            ) : (
                <FaStar key={index} className="main-scd-color" />
            )
        ));
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" aria-label="Fermer la modale" onClick={closeModal}>
                                <FaTimes />
                            </button>
                            {logement.pictures.length > 1 && (
                                <>
                                    <button className="btn-left-modal" aria-label="Afficher l'image précédente" onClick={prevImage}>
                                        <FaChevronLeft />
                                    </button>
                                    <button className="btn-right-modal" aria-label="Afficher l'image suivante" onClick={nextImage}>
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}
                            <img
                                className="modal-image"
                                src={logement.pictures[currentImageIndex]}
                                alt={`Logement ${currentImageIndex + 1}`}
                            />
                            {logement.pictures.length > 1 && (
                                <p className="modal-index">
                                    {currentImageIndex + 1} / {logement.pictures.length}
                                </p>
                            )}
                        </div>
                    </div>
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
                    <Collapse title={"Description"} content={logement.description} />
                    <Collapse title={"Equipements"} content={
                         <div className="content-equipments">
                         {logement.equipments.map((equipment, item) => (
                           <div key={item}>{equipment}</div>
                         ))}
                       </div>
                    } />

                </div>
            </div>
        </main>
    );
}

export default InfoLogement;