import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp, FaStar, FaTimes } from "react-icons/fa";
import "../styles/GalleryCard.css";

function GalleryCard({ logements }) {
    const { id } = useParams();
    const [logement] = logements.filter(logement => logement.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % logement.pictures.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
        );
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


    const [isModalOpen, setIsModalOpen] = useState(false);  // État pour gérer l'ouverture/fermeture de la modale
    const openModal = () => setIsModalOpen(true);           // Ouvrir la modale
    const closeModal = () => setIsModalOpen(false);         // Fermer la modale

    return (
        <div className="gallery-card">
            <div className="carousel">
                <button className="btn-left" onClick={prevImage}>
                    <FaChevronLeft />
                </button>
                <img
                    className="carousel-image"
                    src={logement.pictures[currentImageIndex]}
                    alt={`Logement ${currentImageIndex + 1}`}
                    onClick={openModal}                     // Ouvre la modale au clic
                />
                <button className="btn-right" onClick={nextImage}>
                    <FaChevronRight />
                </button>
                <p className="carousel-index">
                    {currentImageIndex + 1} / {logement.pictures.length}
                </p>
            </div>

            {/* Modale */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <button className="btn-left-modal" onClick={prevImage}>
                            <FaChevronLeft />
                        </button>
                        <img
                            className="modal-image"
                            src={logement.pictures[currentImageIndex]}
                            alt={`Logement ${currentImageIndex + 1}`}
                        />
                        <button className="btn-right-modal" onClick={nextImage}>
                            <FaChevronRight />
                        </button>
                        <p className="modal-index">
                            {currentImageIndex + 1} / {logement.pictures.length}
                        </p>
                    </div>
                </div>
            )}

            <div className="title-location-name-picture">
                <div className="title-location">
                    <p className="title">{logement.title}</p>
                    <p className="location">{logement.location}</p>
                </div>
                <div className="name-picture">
                    <p className="name">{logement.host.name}</p>
                    <img className="picture" src={logement.host.picture} alt="" />
                </div>
            </div>

            <div className="tags-rating">
                <div className="tags-container">
                    {logement.tags.map((tag, index) => (
                        <span key={index} className="tags">
                            {tag}
                        </span>
                    ))}
                </div>
                <span className="rating">{ratingToStars(logement.rating)}</span>
            </div>

            <div className="btn-gallery-card">
                <div className="description-equipements">
                    <button className="btn-description">
                        Description
                        {openSections.description ? (
                            <FaChevronDown onClick={() => toggleSection("description")} />
                        ) : (
                            <FaChevronUp onClick={() => toggleSection("description")} />
                        )}
                    </button>
                    {openSections.description && (
                        <div className="btn-description-text">
                            <p>{logement.description}</p>
                        </div>
                    )}
                </div>
                <div className="description-equipements">
                    <button className="btn-equipments">
                        Equipements
                        {openSections.equipments ? (
                            <FaChevronDown onClick={() => toggleSection("equipments")} />
                        ) : (
                            <FaChevronUp onClick={() => toggleSection("equipments")} />
                        )}
                    </button>
                    {openSections.equipments && (
                        <div className="btn-equipments-text">
                            <div className="equipment-container">
                                {logement.equipments.map((equipment, index) => (
                                    <span key={index} className="equipments">
                                        {equipment}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GalleryCard;
