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
import toast from 'react-hot-toast';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import authAxios from '../../../../../utils/auth-axios';
import { setError } from '../../../../../utils/error';
import {
  getInternationalCourrierPrice,
  getPrice,
} from '../../../../../utils/helper';

const LettresInternationalPayment = () => {
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState('online');
  const { lettreIinternational } = useSelector(
    (state) => state.letterInternational
  );

  const newCourrier = {
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
  };

  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/lettres/international', newCourrier);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/courriers/international-checkout/${res.data._id}`);
        }
      }
    } catch (error) {
      toast.error(setError(error));
    }
  };

  useEffect(() => {
    if (!lettreIinternational) return navigate(-1);
  }, [lettreIinternational, navigate]);

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className='mb-4 text-warning'>Mon envoi </h1>
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
            <p> Poids : {lettreIinternational?.weight} g</p>
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
                      <span>
                        {getInternationalCourrierPrice(
                          lettreIinternational.weight
                        )}
                        DT
                      </span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{lettreIinternational.weight} g</span>
                  </ListGroup.Item>{' '}
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
