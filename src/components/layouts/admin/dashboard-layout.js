import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './sidebar';
import Topbar from './topbar';
import '../../../styles/tabs.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className='d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary'>
      <Sidebar />
      <div className='h-screen flex-grow-1 overflow-y-lg-auto'>
        <Topbar />
        <main className='py-6 bg-surface-secondary'>
          <Container fluid>{children}</Container>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
