import './footer.scss';

import logo from '../../assets/logo-footer.png';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo' className='logo-kasa' />
      <div className='footer-text'>
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
