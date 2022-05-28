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
import { getPrice } from '../../../../utils/helper';

const RapidPostInternationalPayment = () => {
  const { rapidPostIinternational } = useSelector(
    (state) => state.rapidPostInternational
  );
  const [payMethod, setPayMethod] = useState('online');
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className='mb-4 text-warning'>Mon envoi</h1>
            <h3 className='my-2'>Expéditeur</h3>
            <p> Nom : {rapidPostIinternational?.expName}</p>
            <p> Email : {rapidPostIinternational?.expEmail}</p>
            <p> Adresse : {rapidPostIinternational?.expAddress}</p>
            <p> Téléphone : {rapidPostIinternational?.expPhone}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {rapidPostIinternational?.desName}</p>
            <p> Email : {rapidPostIinternational?.desEmail}</p>
            <p> Adresse : {rapidPostIinternational?.desAddress}</p>
            <p> Téléphone : {rapidPostIinternational?.desPhone}</p>
            <h3 className='my-2'>Colis</h3>
            <p> Pays : {rapidPostIinternational?.country}</p>
            <p> Nature : {rapidPostIinternational?.nature} </p>
            <p> Poids : {rapidPostIinternational?.weight} (gram)</p>
            <p> Quantité : {rapidPostIinternational?.qty} </p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Paiement
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    {' '}
                    <h4 className='d-flex justify-content-between align-content-center'>
                      <span>Montant</span>
                      <span>${getPrice(rapidPostIinternational.weight)}</span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{rapidPostIinternational.weight} (g)</span>
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
                    <Button className='w-full mt-2'>Payer</Button>
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

export default RapidPostInternationalPayment;
