import React from 'react'
import './App.css';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import InfoSection2 from './components/InfoSection2';
import { InfoData, InfoDataTow } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import NavProd from './components/NavProd';
import Footer from './components/Footer';

function App() {
  return (
    <>
  <GlobalStyle/>
    <NavProd/>
    <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>
    <InfoSection2 {...InfoDataTow}/>
    <Footer/>
    </>
  );
}

export default App;
