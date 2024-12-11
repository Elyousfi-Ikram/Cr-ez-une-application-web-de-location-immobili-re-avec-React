import React from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import './modal.scss';

function Modal({ logement, closeModal, currentImageIndex, setCurrentImageIndex }) {


    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
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
    );
}

export default Modal;
