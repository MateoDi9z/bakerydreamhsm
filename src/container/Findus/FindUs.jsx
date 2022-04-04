import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '2rem' }}>Encontranos en nuestras Redes</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Contactanos por nuestro <a href="https://www.instagram.com/bakerydreamhsm/" style={{color: '#DCCA87'}}>Instagram</a></p>
        {/*<p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>*/}
      </div>
      <a href="https://www.instagram.com/bakerydreamhsm/">
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Ir a Instagram</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.logo} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;