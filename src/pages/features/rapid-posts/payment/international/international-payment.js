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
import toast from 'react-hot-toast';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import authAxios from '../../../../../utils/auth-axios';
import { setError } from '../../../../../utils/error';
import { getPrice } from '../../../../../utils/helper';

const RapidPostInternationalPayment = () => {
  const { rapidPostIinternational } = useSelector(
    (state) => state.rapidPostInternational
  );
  const [payMethod, setPayMethod] = useState('online');
  const navigate = useNavigate();

  const newRp = {
    expediteur: {
      name: rapidPostIinternational.expName,
      email: rapidPostIinternational.expEmail,
      address: rapidPostIinternational.expAddress,
      phone: rapidPostIinternational.expPhone,
    },
    destinataire: {
      name: rapidPostIinternational.desName,
      email: rapidPostIinternational.desEmail,
      address: rapidPostIinternational.desAddress,
      phone: rapidPostIinternational.desPhone,
    },
    coli: {
      country: rapidPostIinternational.country,
      weight: rapidPostIinternational.weight,
    },
    method: payMethod,
    price: (
      getPrice(rapidPostIinternational.weight) * rapidPostIinternational.qty
    ).toFixed(2),
  };

  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/rapidPosts/international', newRp);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/rapidPosts/international-checkout/${res.data._id}`);
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
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{rapidPostIinternational.weight} g</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3 className='d-flex justify-content-between align-content-center'>
                      <span>Montant</span>
                      <span>
                        {getPrice(rapidPostIinternational.weight)}
                        DT
                      </span>
                    </h3>
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
                    <Button onClick={handleCreate} className='w-full mt-2'>
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

export default RapidPostInternationalPayment;
