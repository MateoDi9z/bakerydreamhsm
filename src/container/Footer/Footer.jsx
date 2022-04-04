import React from 'react';
import { FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components'; // Newsletter
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {

  return (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/*<Newsletter />*/}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginBottom: 15 }} />
        <a>
          <FiInstagram id="ig" />
        </a>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Repostería de calidad.&quot;</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios de envio</h1>
        <p className="p__opensans">Proximamente...</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{(new Date().getFullYear())} &copy; Bakery Dream. All Rights reserved.</p>
    </div>

  </div>
  )
};

export default Footer;