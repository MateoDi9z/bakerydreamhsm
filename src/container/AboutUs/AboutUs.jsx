import React from 'react';

import { images } from '../../constants/';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Que hacemos?</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Somos un nuevo emprendimiento repostero y hacemos desde tortas hasta postres de distintos tipos </p>
        <a href="#menu">
          <button type="button" className="custom__button">Ver Menu</button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Donde?</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Nuestra venta esta orientada principalmente en HSM por el momento </p>
        <a href="#galeria">
          <button type="button" className="custom__button">Ver Ejemplos</button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
