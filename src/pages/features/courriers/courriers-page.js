import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../../components/layouts/default-layout';

const CourriersPage = () => {
  return (
    <DefaultLayout title={'courriers'}>
      <Container>
        <Row className=' justify-content-md-center'>
          <h1 className='text-center mb-3'>Select le type de lettre</h1>
          <Col md={6}>
            <Card style={{ height: '720px' }}>
              <Link to='/courriers/intern-form'>
                <Card.Img src='/colis/dreamstime_s_124604337.jpg' />
                <Card.Body>
                  <Card.Title>
                    <h2 className='text-center'>Lettre Interne</h2>{' '}
                  </Card.Title>
                  <Card.Text>
                    Vous voulez adresser une lettre à
                    Tunisie ? 
                    Les délais de transport, les tarifs sont différents pour
                    chaque destination. Ce qui ne change pas, ce sont les
                    services de La Poste : My ship pour les envois classiques et
                    Chronopost, pour du transport express.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '720px' }}>
              <Link to='/courriers/international-form'>
                <Card.Img src='/colis/international-courier-services-500x500.jpg' />
                <Card.Body>
                  <Card.Title>
                    <h2 className='text-center'>Lettre International </h2>{' '}
                  </Card.Title>
                  <Card.Text>
                    Vous voulez adresser une lettre à l'étranger ?  Les
                    délais de transport, les tarifs et les formalités douanières
                    sont différents pour chaque destination. Ce qui ne change
                    pas, ce sont les services de La Poste :My ship pour les
                    envois classiques et Chronopost, pour du transport express.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default CourriersPage;
