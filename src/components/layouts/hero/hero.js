import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <section className='section main-banner' id='top' data-section='section1'>
      <img
        id='bg-video'
        src='/assets/depositphotos_18969047-stock-photo-large-furniture-warehouse.jpg'
        alt=''
      />
      <div className='video-overlay header-text'>
        <div className='caption'>
          <h1 className='text-white'>MY SHIP</h1>
          <h2>
            <em>Votre</em> Meilleur choix
          </h2>
          <div className='main-button'>
            <div className='scroll-to-section'>
              <Link to='/colis-envoi'>Découvrir</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
