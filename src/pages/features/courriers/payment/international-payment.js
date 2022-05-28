import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../../../components/layouts/default-layout';
import { createInternationalLettre } from '../../../../store/lettres/international-slice';
import { getPrice } from '../../../../utils/helper';

const LettresInternationalPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payMethod, setPayMethod] = useState('online');
  const { lettreIinternational } = useSelector(
    (state) => state.letterInternational
  );

  const handleCreate = () => {
    dispatch(
      createInternationalLettre({
        expediteur: {
          name: lettreIinternational.expName,
          email: lettreIinternational.expEmail,
          address: lettreIinternational.expAddress,
          phone: lettreIinternational.expPhone,
        },
        destinataire: {
          name: lettreIinternational.desName,
          email: lettreIinternational.desEmail,
          address: lettreIinternational.desAddress,
          phone: lettreIinternational.desPhone,
        },
        coli: {
          country: lettreIinternational.country,
          weight: lettreIinternational.weight,
        },
        method: payMethod,
        price: getPrice(lettreIinternational.weight),
      })
    );
  };

  useEffect(() => {
    if (!lettreIinternational) return navigate(-1);
  }, [lettreIinternational, navigate]);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className='mb-4 text-warning'>My Order</h1>
            <h3 className='my-2'>Expéditeur</h3>
            <p> Nom : {lettreIinternational?.expName}</p>
            <p> Email : {lettreIinternational?.expEmail}</p>
            <p> Adresse : {lettreIinternational?.expAddress}</p>
            <p> Téléphone : {lettreIinternational?.expPhone}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {lettreIinternational?.desName}</p>
            <p> Email : {lettreIinternational?.desEmail}</p>
            <p> Adresse : {lettreIinternational?.desAddress}</p>
            <p> Téléphone : {lettreIinternational?.desPhone}</p>
            <h3 className='my-2'>Colis</h3>
            <p> Pays : {lettreIinternational?.country}</p>
            <p> Poids : {lettreIinternational?.weight} (gram)</p>
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
                      <span>Monatnt</span>
                      <span>${getPrice(lettreIinternational.weight)}</span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{lettreIinternational.weight} (gram)</span>
                  </ListGroup.Item>{' '}
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Price</span>
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
                    <Button onClick={handleCreate} className='w-full'>
                      Payer
                    </Button>
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

export default LettresInternationalPayment;
