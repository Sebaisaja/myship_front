import React from 'react';
import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  FormSelect,
  ListGroup,
  Row,
} from 'react-bootstrap';
import toast from 'react-hot-toast';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import authAxios from '../../../../../utils/auth-axios';
import { setError } from '../../../../../utils/error';
import { getPrice } from '../../../../../utils/helper';

const ColisInternationalPayment = () => {
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState('online');
  const { colisIinternational } = useSelector(
    (state) => state.coilsInternational
  );
  const {
    expName,
    expEmail,
    expAddress,
    expPhone,
    desName,
    desEmail,
    desPhone,
    desAddress,
    desContent,
    content,
    country,
    qty,
    numColis,
    weight,
  } = colisIinternational;

  const newColi = {
    expediteur: {
      name: expName,
      email: expEmail,
      address: expAddress,
      phone: expPhone,
    },
    destinataire: {
      name: desName,
      email: desEmail,
      address: desAddress,
      phone: desPhone,
    },
    coli: {
      content,
      num: numColis,
      designation: desContent,
      country,
      weight,
      qty,
    },
    method: payMethod,
    price: getPrice(colisIinternational.weight) * colisIinternational.qty,
  };
  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/colis/international', newColi);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/coils/international-placeorder/${res.data._id}`);
        }
      }
    } catch (error) {
      toast.error(setError(error));
    }
  };

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className='mb-4 text-warning'>Mon Envoi</h1>
            <h3 className='my-2'>L'Expéditeur</h3>
            <p> Nom Expéditeur : {colisIinternational.expName}</p>
            <p> Email Expéditeur : {colisIinternational.expEmail}</p>
            <p> Adresse Expéditeur : {colisIinternational.expAddress}</p>
            <p> téléphone Expéditeur : {colisIinternational.expPhone}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom Destinataire: {colisIinternational.desName}</p>
            <p> Email Destinataire : {colisIinternational.desEmail}</p>
            <p> Adresse Destinataire : {colisIinternational.desAddress}</p>
            <p> Téléphone Destinataire : {colisIinternational.desPhone}</p>
            <h3 className='my-2'> Information Colis</h3>
            <p> Contenu Colis : {colisIinternational.content}</p>
            <p> Num du Colis : {colisIinternational.numColis}</p>
            <p> Désignation Du Colis  : {colisIinternational.desContent}</p>
            <p> Pays : {colisIinternational.country}</p>
            <p> Origine de Colis : {colisIinternational.origine}</p>
            <p> Poids : {colisIinternational.weight}</p>
            <p> Quantité : {colisIinternational.qty}</p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Mon Envoi
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{colisIinternational.weight} (g)</span>
                  </ListGroup.Item>{' '}
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Pays</span>
                    <span>{colisIinternational.country}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-content-center'>
                      <span>Montant</span>
                      <span>{getPrice(colisIinternational.weight)} DT</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <h4 className='d-flex justify-content-between align-content-center'>
                      <span>Total Montant</span>
                      <span>
                        {getPrice(colisIinternational.weight) *
                          colisIinternational.qty}
                        DT
                      </span>
                    </h4>
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
                      Confirmer
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

export default ColisInternationalPayment;
