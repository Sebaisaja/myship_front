import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  FormSelect,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import DefaultLayout from '../../../../components/layouts/default-layout';

const RapidPostNationalPayment = () => {
  const [payMethod, setPayMethod] = useState('online');

  const { rapidPostInterne } = useSelector((state) => state.rapidPostInterne);
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className='mb-4 text-warning'>Mon envoi</h1>
            <h3 className='my-2'>Information</h3>
            <p> Agence : {rapidPostInterne?.agence}</p>
            <p>
              {' '}
              Nom ou Raison Social du Déposant : {rapidPostInterne?.socialName}
            </p>
            <p> Poids : {rapidPostInterne?.weight} (gram)</p>

            <p> Adresse Expéditeur : {rapidPostInterne?.expAddress}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {rapidPostInterne?.desName}</p>
            <p> Adresse : {rapidPostInterne?.desAddress}</p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Paiement
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Montant</span>
                    <span>500</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Montant</span>
                    <span>500</span>
                  </ListGroup.Item>{' '}
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                  <span>Montant</span>
                  <span>500</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FormSelect
                      onChange={(e) => setPayMethod(e.target.value)}
                      value={payMethod}
                    >
                      <option value='online'>Payer en ligne</option>
                      <option value='agence'>Payer en agence</option>
                    </FormSelect>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className='w-full'>Payer</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default RapidPostNationalPayment;
