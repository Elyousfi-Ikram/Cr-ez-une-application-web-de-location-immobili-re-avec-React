import GalleryCard from '../galleryCard/galleryCard';

import '../gallery/gallery.scss';

import logements from '../../datas/logements.json';

function Gallery() {
    return (
        <div className='Gallery'>
            <div className='gallery-content'>
                {logements.map((logement) => (
                    <GalleryCard key={logement.id} data={logement} />
                ))}
            </div>
        </div>
    )
}

export default Gallery;
