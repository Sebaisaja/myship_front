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

const RapidPostNationalPayment = () => {
  const [payMethod, setPayMethod] = useState('online');

  const { rapidPostInterne } = useSelector((state) => state.rapidPostInterne);
  const navigate = useNavigate();

  const newRp = {
    expediteur: {
      agence: rapidPostInterne.agence,
      address: rapidPostInterne.expAddress,
    },
    destinataire: {
      name: rapidPostInterne.desName,
      address: rapidPostInterne.desAddress,
    },
    coli: {
      content: rapidPostInterne.content,
      agence: rapidPostInterne.agence,
      weight: rapidPostInterne.weight,
    },
    method: payMethod,
    price: getPrice(rapidPostInterne.weight),
  };

  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/rapidPosts/national', newRp);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/rapidPosts/national-checkout/${res.data._id}`);
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
            <h1 className='mb-4 text-warning'>My Order</h1>
            <h3 className='my-2'>Information</h3>
            <p> Agence : {rapidPostInterne?.agence}</p>
            <p>
              {' '}
              Nom ou Raison Social du Déposant : {rapidPostInterne?.socialName}
            </p>
            <p> Poids : {rapidPostInterne?.weight} g</p>

            <p> Address Expéditeur : {rapidPostInterne?.expAddress}</p>
            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {rapidPostInterne?.desName}</p>
            <p> Address : {rapidPostInterne?.desAddress}</p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Payment
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <h3 className='d-flex justify-content-between align-content-center'>
                      <span>Prix</span>
                      <span>
                        {getPrice(rapidPostInterne.weight)}
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
                    <Button onClick={handleCreate} className='w-full'>
                      Pay
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

export default RapidPostNationalPayment;
