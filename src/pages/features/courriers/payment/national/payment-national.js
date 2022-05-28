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
import { getNationalCourrierPrice } from '../../../../../utils/helper';

const LettresNationalPayment = () => {
  const { lettreInterne } = useSelector((state) => state.lettreInterne);
  const [payMethod, setPayMethod] = useState('online');
  const navigate = useNavigate();

  const newCourrier = {
    expediteur: {
      name: lettreInterne.expName,
      address: lettreInterne.expAddress,
    },
    destinataire: {
      name: lettreInterne.desName,
      address: lettreInterne.desAddress,
    },
    coli: {
      codePostal: lettreInterne.postalCode,
      weight: lettreInterne.weight,
    },
    method: payMethod,

    price: getNationalCourrierPrice(lettreInterne.weight),
  };

  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/lettres/national', newCourrier);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/courriers/national-checkout/${res.data._id}`);
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
            <h1 className='mb-4 text-warning'>Mon envoi </h1>
            <h3 className='my-2'>Expéditeur</h3>
            <p> Nom : {lettreInterne?.expName}</p>
            <p> Adresse : {lettreInterne?.expAddress}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {lettreInterne?.desName}</p>
            <p> Adresse : {lettreInterne?.desAddress}</p>
            <h3 className='my-2'>Colis</h3>
            <p> Code Postal : {lettreInterne?.postalCode}</p>
            <p> Poids : {lettreInterne?.weight} g</p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Paiement
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item
                    as={'h5'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Montant</span>
                    <span>
                      {getNationalCourrierPrice(lettreInterne?.price)} DT
                    </span>
                  </ListGroup.Item>{' '}
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Poids</span>
                    <span>{lettreInterne?.weight} g</span>
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

export default LettresNationalPayment;
