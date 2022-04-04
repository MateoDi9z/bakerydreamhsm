import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading text="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Catalogo</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Tortas</p>
        <div className="app__specialMenu-menu_items">
          { data.tortas.map((torta, index) => (
            <MenuItem key={torta.title + index} price={torta.price} title={torta.title} tags={torta.tags} />
          )) }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Postres</p>
        <div className="app__specialMenu-menu_items">
          {data.postres.map((postre, index) => (
            <MenuItem key={postre.title + index} title={postre.title} price={postre.price} tags={postre.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
