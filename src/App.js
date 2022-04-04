import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container'; // Chef, Laurels,
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/*<Chef />*/}
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
