import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar, FaTimes } from "react-icons/fa";
import Collapse from '../Collapse/collapse.js';
import "./infoLogement.scss";
import '../Modal/modal.scss'

function InfoLogement({ logements }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        navigate("/logement/not-found-404");
        return;
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
        <div className="gallery-card">
            <div className="carousel">
                <button className="btn-left" onClick={prevImage}>
                    <FaChevronLeft />
                </button>
                <img
                    className="carousel-image"
                    src={logement.pictures[currentImageIndex]}
                    alt={`Logement ${currentImageIndex + 1}`}
                    onClick={openModal}
                />
                <button className="btn-right" onClick={nextImage}>
                    <FaChevronRight />
                </button>
                <p className="carousel-index">
                    {currentImageIndex + 1} / {logement.pictures.length}
                </p>
            </div>

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
                    <img className="picture" src={logement.host.picture} alt="Host" />
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


            <Collapse logement={logement} type="logement" />

        </div>
    );
}

export default InfoLogement;
