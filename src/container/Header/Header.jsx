import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapperi section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Bakery Dream" />
      <h1 className="app__header-h1">Repostería de calidad</h1>
      <p className="p__opensans" style={{ margin: "-0.5rem 0 2rem" }}>
        Postres, Tortas & Mas
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={ images.welcome } alt="header img" />
    </div>
  </div>
);

export default Header;
