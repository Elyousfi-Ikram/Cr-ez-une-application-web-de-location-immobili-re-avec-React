import React from "react";
import { Link } from "react-router-dom";

function GalleryCard({ data }) {

    return (
        <Link to={ `/gallery/${data.id}` } key={data.id} className='logement-card'>
            <div className='title-card'>
                <span className="title-text">{data.title}</span>
            </div>
            <img className='cover-card' src={data.cover} alt="{data.title}" />
        </Link>
    );
}

export default GalleryCard;
