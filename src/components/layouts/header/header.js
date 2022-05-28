import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import storage from 'redux-persist/lib/storage';
import { persistor } from '../../../store';
import { userLogout } from '../../../store/users/login-slice';
import './header.css';

const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLogout());
    persistor.flush();
    storage.removeItem('persist:root');
    document.location.href = '/login';
  };

  return (
    <header>
      <Navbar
        className='navbar__top'
        collapseOnSelect
        expand='lg'
        variant='dark'
      >
        <Container fluid className='mx-16'>
          {/* <img width={60} className='avatar' src='/logo.png' alt='...' /> */}
          <Navbar.Brand>
            <span className='logo'>
              <span style={{ color: '#f5a425' }}>My</span> Ship
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Accueil</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mes-envoi'>
                <Nav.Link>Mes Envois</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/reclamtion'>
                <Nav.Link>Réclamation</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title='Nouvel Envoi'
                id='collasible-nav-dropdown'
                className='me-8'
              >
                <LinkContainer to='/colis-envoi'>
                  <NavDropdown.Item className='drop__links'>
                    Envoi colis
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/courriers-envoi'>
                  <NavDropdown.Item className='drop__links'>
                    Envoi lettre
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/rapid-poste-envoi'>
                  <NavDropdown.Item className='drop__links'>
                    Envoi par rapid poste
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className='d-flex align-items-center mx-5'>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.firstName}
                  id='collasible-nav-dropdown'
                  className='me-8'
                >
                  {userInfo.isActeur === true || userInfo.isAdmin ? (
                    <LinkContainer to='/dashboard'>
                      <NavDropdown.Item className='drop__links'>
                        Dashboard
                      </NavDropdown.Item>
                    </LinkContainer>
                  ) : null}
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item className='drop__links'>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='#'>
                    <NavDropdown.Item
                      className='drop__links'
                      onClick={logoutHandler}
                    >
                      Se Déconnecter
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link> Connecter</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/register'>
                    <Nav.Link>Inscrire</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
