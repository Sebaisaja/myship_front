import React from 'react';
import { Navbar, Container, Button, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { HiDocumentReport, HiUsers } from 'react-icons/hi';
import { GiSecretBook } from 'react-icons/gi';
import { AiFillHome, AiFillDashboard } from 'react-icons/ai';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <Navbar
      expand='lg'
      style={{ backgroundColor: 'rgba(22, 34, 57, 0.95)' }}
      variant='dark'
      className=' show navbar-vertical h-lg-screen  px-0 py-3  border-bottom border-bottom-lg-0 '
      id='navbarVertical'
    >
      <Container fluid>
        <Button
          className='navbar-toggler ms-n2'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarCollapse'
          aria-controls='sidebarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </Button>
        <Link
          className='navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center'
          to='/'
        >
          <Image
            fluid
            src='/logo-removebg-preview.png'
            alt='logo'
            style={{ height: '60px' }}
          />
          <span className='logo text-white'>
            <span style={{ color: '#f5a425' }}>My</span> Ship
          </span>
        </Link>
        <div className='navbar-user d-lg-none'>
          <div className='dropdown'>
            <Link
              to='#'
              id='sidebarAvatar'
              role='button'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <div className='avatar-parent-child'>
                <Image
                  alt='Image Placeholder'
                  src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                  className='avatar avatar- rounded-circle'
                />
                <span className='avatar-child avatar-badge bg-success' />
              </div>
            </Link>{' '}
            <div
              className='dropdown-menu dropdown-menu-end'
              aria-labelledby='sidebarAvatar'
            >
              <Link to='/' className='dropdown-item'>
                Profile
              </Link>
              <Link to='#' className='dropdown-item'>
                Paramètres
              </Link>
              <Link to='#' className='dropdown-item'>
                Facturation
              </Link>
              <hr className='dropdown-divider' />{' '}
              <button className='dropdown-item'>Se déconnecter</button>
            </div>
          </div>
        </div>
        <div className='collapse navbar-collapse' id='sidebarCollapse'>
          <ul className='navbar-nav'>
            <li className='nav-item  '>
              <Link className='nav-link p-5' to='/dashboard'>
                <AiFillHome className='me-2' size={'1.5rem'} /> Acceuil
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/dashboard/client-list'>
                <HiUsers className='me-2' size={'1.5rem'} /> Client
              </Link>
            </li>
            {userInfo.isAdmin && (
              <>
              <li className='nav-item '>
                  <Link className='nav-link p-5' to='/dashboard/agent-list'>
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste des agents 
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link className='nav-link p-5' to='/dashboard/colis-list'>
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste des Colis
                  </Link>
                </li>
            
                <li className='nav-item '>
                  <Link
                    className='nav-link p-5'
                    to='/dashboard/courriers-international-list'
                  >
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste des Lettre
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link p-5'
                    to='/dashboard/rapidPosts-national-list'
                  >
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste Rapide-Poste
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link className='nav-link p-5' to='/dashboard/reclamation'>
                    <HiDocumentReport className='me-2' size={'1.5rem'} />{' '}
                    Réclamation
                  </Link>
                </li>
              </>
            )}
            {userInfo.isActeur && (
              <>
                <li className='nav-item '>
                  <Link
                    className='nav-link p-5'
                    to='/dashboard/colis-agent-list'
                  >
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste Colis
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link p-5'
                    to='/dashboard/courriers-agent-list'
                  >
                    <HiUsers className='me-2' size={'1.5rem'} />  Liste Lettre
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link
                    className='nav-link p-5'
                    to='/dashboard/colis-agent-list'
                  >
                    <HiUsers className='me-2' size={'1.5rem'} /> Liste  Rapide-
                    Poste
                  </Link>
                </li>
              </>
            )}
          </ul>

          <hr className='navbar-divider my-5 opacity-20' />

          <div className='' />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <LinkContainer to='#'>
                <Nav.Link>
                  <i className='bi bi-person-square' /> Mon Compte
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className='nav-item'>
              <Nav.Link>
                <i className='bi bi-box-arrow-left' /> Se déconnecter
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
