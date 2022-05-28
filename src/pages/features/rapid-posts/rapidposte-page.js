import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../../components/layouts/default-layout';

const RapidpostePage = () => {
  return (
    <DefaultLayout title={'rapide posts'}>
      <Container>
        <Row className=' justify-content-md-center'>
          <h1 className='text-center mb-3'>Select le type de l'envoi</h1>
          <Col md={6}>
            <Link to='/rapid-poste/intern-form'>
              <Card style={{ height: '720px' }}>
                <Card.Img src='/colis/dreamstime_s_124604337.jpg' />
                <Card.Body>
                  <Card.Title>
                    <h2 className='text-center'>Rapid Poste Interne</h2>{' '}
                  </Card.Title>
                  <Card.Text>
                    Vous voulez adresser des Echantillion à un ami qui séjourne
                    en Tunisie ? Un cadeau à vos parents en gasserine ? délais
                    de transport, les tarifs sont différents pour chaque
                    destination. Ce qui ne change pas, ce sont les services de
                    La Poste :My ship pour les envois classiques et Chronopost,
                    pour du transport express.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={6}>
            <Link to='/rapid-poste/international-form'>
              <Card style={{ height: '720px' }}>
                <Card.Img src='/colis/international-courier-services-500x500.jpg' />
                <Card.Body>
                  <Card.Title>
                    <h2 className='text-center'>Rapid Poste International </h2>{' '}
                  </Card.Title>
                  <Card.Text>
                    Vous voulez adresser des marchandises à un ami qui séjourne
                    en Asie ? Un cadeau à vos parents en Suède ou en Algérie ?
                    Les délais de transport, les tarifs et les formalités
                    douanières sont différents pour chaque destination. Ce qui
                    ne change pas, ce sont les services de La Poste : My Ship
                    pour les envois classiques et Chronopost, pour du transport
                    express.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default RapidpostePage;
