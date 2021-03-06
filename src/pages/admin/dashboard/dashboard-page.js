import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from 'recharts';

const DashboardPage = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <DashboardLayout>
      {userInfo?.isAdmin && (
        <>
          <Row className='g-6 mb-6'>
            <Col xl={4} sm={6} className='col-12'>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                        Budget
                      </span>{' '}
                      <span className='h3 font-bold mb-0'>750DT</span>{' '}
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-tertiary text-white text-lg rounded-circle'>
                        {' '}
                        <i className='bi bi-credit-card' />{' '}
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    <span className='badge badge-pill bg-soft-success text-success me-2'>
                      <i className='bi bi-arrow-up me-1' />
                      13%{' '}
                    </span>{' '}
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>{' '}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} sm={6} md={12}>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                        Nouveaux clients
                      </span>
                      <span className='h3 font-bold mb-0'>32</span>{' '}
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-primary text-white text-lg rounded-circle'>
                        <i className='bi bi-people' />{' '}
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    <span className='badge badge-pill bg-soft-success text-success me-2'>
                      <i className='bi bi-arrow-up me-1' />
                      30%{' '}
                    </span>{' '}
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} sm={6} md={12}>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                        Heures totales de travail
                      </span>
                      <span className='h3 font-bold mb-0'>1.400</span>
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-info text-white text-lg rounded-circle'>
                        <i className='bi bi-clock-history' />
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    <span className='badge badge-pill bg-soft-danger text-danger me-2'>
                      <i className='bi bi-arrow-down me-1' />
                      -5%
                    </span>
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='g-6 mb-6'>
            <Col xl={4} sm={6} className='col-12'>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                       Nombre de Colis
                      </span>{' '}
                      <span className='h3 font-bold mb-0'>25</span>
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-tertiary text-white text-lg rounded-circle'>
                        <i className='bi bi-archive'></i>
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    {' '}
                    <span className='badge badge-pill bg-soft-success text-success me-2'>
                      {' '}
                      <i className='bi bi-arrow-up me-1' />
                      13%{' '}
                    </span>{' '}
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>{' '}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} sm={6} md={12}>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                        Nombre de Lettre
                      </span>
                      <span className='h3 font-bold mb-0'>32</span>
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-primary text-white text-lg rounded-circle'>
                        <i className='bi bi-envelope'></i>
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    {' '}
                    <span className='badge badge-pill bg-soft-success text-success me-2'>
                      {' '}
                      <i className='bi bi-arrow-up me-1' />
                      30%{' '}
                    </span>{' '}
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} sm={6} md={12}>
              <Card className=' shadow border-0'>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                       Nombre d'envoi par Rapide-poste
                      </span>
                      <span className='h3 font-bold mb-0'>37</span>
                    </Col>
                    <div className='col-auto'>
                      <div className='icon icon-shape bg-info text-white text-lg rounded-circle'>
                        <i className='bi bi-truck'></i>
                      </div>
                    </div>
                  </Row>
                  <div className='mt-2 mb-0 text-sm'>
                    <span className='badge badge-pill bg-soft-danger text-danger me-2'>
                      <i className='bi bi-arrow-down me-1' />
                      -5%
                    </span>
                    <span className='text-nowrap text-xs text-muted'>
                      Depuis le mois dernier
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
