import '../gallery/gallery.scss';
import logements from '../../datas/logements.json';
import GalleryCard from '../gallery-card/gallery-card.js';



function Gallery() {
    return (
        <div className='Gallery'>
            { logements.map((logement) => (
                <GalleryCard key={ logement.id } data={ logement } />
            ) )}
        </div>
    )
}

export default Gallery;
