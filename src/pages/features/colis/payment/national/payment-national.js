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

const ColisNationalPayment = () => {
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState('online');
  const { colisInterne } = useSelector((state) => state.coilsInterne);

  const newColi = {
    expediteur: {
      name: colisInterne.expName,
      address: colisInterne.expAddress,
    },
    destinataire: {
      name: colisInterne.desName,
      address: colisInterne.desAddress,
    },
    coli: {
      content: colisInterne.content,
      num: colisInterne.numColis,
      weight: colisInterne.weight,
    },
    method: payMethod,
    price: getPrice(colisInterne.weight),
  };
  const handleCreate = async () => {
    try {
      const res = await authAxios.post('/colis/national', newColi);
      if (res.data) {
        if (res.data.method === 'agence') {
          toast.success(
            'veuillez visiter notre agent pour valider votre commande'
          );
          navigate('/mes-envoi');
        } else {
          navigate(`/coils/national-placeorder/${res.data._id}`);
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
            <h3 className='my-2'>Expéditeur</h3>
            <p> Nom : {colisInterne?.expName}</p>

            <p> Address : {colisInterne?.expAddress}</p>

            <h3 className='my-2'>Destinataire</h3>
            <p> Nom : {colisInterne?.desName}</p>

            <p> Address : {colisInterne?.desAddress}</p>

            <h3 className='my-2'>Colis</h3>
            <p> Contenu : {colisInterne?.content}</p>
            <p> Num du Colis : {colisInterne?.numColis}</p>

            <p> Poids : {colisInterne?.weight}</p>
          </Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Paiement
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <h3 className='d-flex justify-content-between align-content-center'>
                      <span>Montant</span>
                      <span>{getPrice(colisInterne.weight)} DT</span>
                    </h3>
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

export default ColisNationalPayment;
