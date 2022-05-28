import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Topbar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <header className='main__bg-color border-bottom pt-6 text-white'>
      <Container fluid>
        <div className='mb-npx'>
          <Row className='align-items-center text-white'>
            <Col sm={6} className='col-12 mb-4 mb-sm-0 text-white '>
              <h1 className='mb-2 text-white'>
                <Navbar.Brand href='#home'></Navbar.Brand>
              </h1>
            </Col>
            <div className='col-sm-6 col-12 text-sm-end'>
              <div className=' text-white h-16'>
                {userInfo.isActeur && (
                  <h3 className='text-white'>Espace Agent</h3>
                )}
                {userInfo.isAdmin && (
                  <h3 className='text-white'>Espace Admin</h3>
                )}
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
