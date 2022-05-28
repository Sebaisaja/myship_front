import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsTruck } from 'react-icons/bs';
import { CgBox } from 'react-icons/cg';
import './courses.css';

const Courses = () => {
  const [courseShow, setCourseShow] = useState(false);
  const [classShow, setClassShow] = useState(false);
  const [realShow, setRealShow] = useState(false);

  const ShowToggle = () => {
    setCourseShow(true);
  };

  const hideToggle = () => {
    setCourseShow(false);
  };

  return (
    <section id='features' className='features'>
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <div className='features-post'>
              <div
                className='features-content'
                onMouseEnter={ShowToggle}
                onMouseLeave={hideToggle}
              >
                <div className='content-show'>
                  <h4>
                    <BsTruck size={'2.5rem'} className='me-2' />
                    Adresse
                  </h4>
                </div>
                {courseShow && (
                  <div className='content__toggle'>
                    <p>
                      Rue Hedi Nouira-1030 Tunis,Tunisie
                    </p>
                    
                    <div className='scroll-to-section'>
                      <a href='#section2'>More Info.</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className='features-post second-features'>
              <div
                className='features-content'
                onMouseEnter={() => setClassShow(true)}
                onMouseLeave={() => setClassShow(false)}
              >
                <div className='content-show'>
                  <h4>
                    <CgBox size={'2.5rem'} className='me-2' />
                    Numéro d'appel
                  </h4>
                </div>
                {classShow && (
                  <div>
                    <p>
                      Tél:(+216) 71 839 000 / 70 850 500
                    </p>
                    <p>
                      Fax:(+216) 71 833 787 /70 850 451
                    </p>
                    <div className='scroll-to-section'>
                      <a href='#section3'>Details</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className='features-post third-features'>
              <div
                className='features-content'
                onMouseEnter={() => setRealShow(true)}
                onMouseLeave={() => setRealShow(false)}
              >
                <div className='content-show'>
                  <h4>
                    <CgBox size={'2.5rem'} className='me-2' />
                    Horaire de travail
                  </h4>
                </div>
                {realShow && (
                  <div>
                    <p>
                      Du lundi au jeudi :De 8h à 12h Et de 14h30 à 17h00
                    </p>
                    <p>
                      Vendredi:De 8h à 14h30
                    </p>
                    <div className='scroll-to-section'>
                      <a href='#section4'>Read More</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
