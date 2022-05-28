import React from 'react';
import { useLocation } from 'react-router-dom';
import Meta from '../UI/meta';
import Contact from './contact/contact';
import Courses from './courses/courses';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';

const DefaultLayout = ({ children, title, descirption }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Meta title={title} description={descirption} />
      <Header />
      {isHome && <Hero />}
      {isHome && <Courses />}
      <main className='main__home py-6'>{children}</main>
      {isHome && <Contact />}
      <Footer />
    </>
  );
};

export default DefaultLayout;
