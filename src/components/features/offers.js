import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OffersComponents = ({ offers }) => {
  return (
    <>
      <h2 className='mb-2 text-warning '>{offers.title}</h2>
      <Row>
        <Col md={8}>
          <p>
            Pour envoyer vos Marchandises et cadeaux en tunisie ou Reste du
            Monde
            <br />
            <strong>My Ship </strong> vous propose la solution adaptées à vos
            besoins et exigences
            <br /> Affranchir sur le site destinataire <br /> *Bureaux de poste
            et points commerçants Relais Pickup. A partir de <br />
            <strong className='mt-6'>4,25€ seulement</strong>
          </p>
        </Col>
        <Col md={4}>
          <Link to='/checkout' className='w-full btn btn-warning'>
            J'envoie Mon Colis
          </Link>
        </Col>
      </Row>
      <Row className='mt-4'>
        <h3 className='text-center mb-8'>
          <strong>Comment ça Marche ?</strong>
        </h3>
        {offers.cards.map((coli) => (
          <Col key={coli.id} md={4}>
            <Card className='offers__card '>
              <Card.Img className='p-2 h-72' src={coli.image} />
              <Card.Body>
                <Card.Title>{coli.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='my-6 d-flex justify-content-center flex-column align-items-center'>
        <Link to='/colis-envoi' className='col-4 btn btn-warning'>
          J'envoie mon colis
        </Link>
      </div>
    </>
  );
};

export default OffersComponents;
