import '../styles/Footer.css'
import logo from '../assets/logo-footer.png'


function Footer() {

    return (
        <footer className='footer'>
            <img src={logo} alt='logo' className='logo-kasa' />
            <div>
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    )
}

export default Footer