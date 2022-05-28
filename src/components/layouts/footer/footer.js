import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>
              <img
                src='/logo-removebg-preview.png'
                className='avatar me-3'
                alt=''
              />
              Copyright 2022 &copy; by My{' '}
              <a href='#' rel='sponsored' target='_parent'>
                Ship
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
