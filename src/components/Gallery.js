import '../styles/Gallery.css';
import logements from '../datas/logements.json';
import { Link } from "react-router-dom";


function Gallery() {
    return (
        <div className='Gallery'>
            {logements.map((logement) => (
                <Link to={`/gallery/${logement.id}`} key={logement.id} className='logement-card'>
                    <span className='title-card'>{logement.title}</span>
                    <img className='cover-card' src={logement.cover} alt={logement.title} />
                </Link>
            ))}
        </div>
    )
}

export default Gallery;
