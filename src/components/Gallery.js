import '../styles/Gallery.css';
import annonceLogements from '../datas/annonceLogements.json';


function Gallery() {
    return (
        <div className='Gallery'>
            {annonceLogements.map((logement) => (
                <a href="" className='logement-card' key={logement.title}>
                    <span className='title-card'>{logement.title}</span>
                    <img className='cover-card' src={logement.cover} alt={logement.title} />
                </a>
            ))}
        </div>
    )
}

export default Gallery;
