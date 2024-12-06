import '../Banner/banner.scss'

import imgBannerAbout from '../..//Assets/img-banner-about.png'
import imgBannerAccueil from '../../Assets/img-banner-accueil.png'

function Banner({ type }) {



    return (
        <div>
            {type === "banner-about" && (
                <div>
                    <div className='banner-about'>
                        <img src={imgBannerAbout} alt='' className='img-banner' />
                    </div>
                </div>
            )}
            
            {type === "banner-accueil" && (
                <div>
                    <div className='banner-accueil'>
                        <p className='accueil-text'>Chez vous, partout et ailleurs</p>
                        <img src={imgBannerAccueil} alt='' className='img-banner' />
                    </div>
                </div>
            )}
        </div>
    )

}

export default Banner;


