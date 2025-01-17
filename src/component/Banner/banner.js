import './banner.scss';

function Banner({ text, img }) {
    return (
        <div className='banner'>
            { text !== '' &&
                <p className='text'>{text}</p>
            }
            <img src={img} alt='' className='img-banner' />
        </div>
    )
}

export default Banner;


