import '../Gallery/gallery.scss';
import logements from '../../datas/logements.json';
import GalleryCard from '../Gallery/galleryCard';

function Gallery() {
    return (
        <div className='Gallery'>
            <div>
                <div className='gallery-content'>
                    {logements.map((logement) => (
                        <GalleryCard key={logement.id} data={logement} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
