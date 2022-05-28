import React, { useEffect } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import DefaultLayout from '../../../../components/layouts/default-layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNationalCoilById } from '../../../../store/colis/national-details';
import Stripe from 'react-stripe-checkout';
import { setError } from '../../../../utils/error';
import toast from 'react-hot-toast';
import authAxios from '../../../../utils/auth-axios';
import Loader from '../../../../components/UI/loader';

const ColiNationalPlaceorder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { nationalCoil, loading } = useSelector(
    (state) => state.nationalCoilById
  );
  const navigate = useNavigate();

  const handlePayment = async (token) => {
    const isPaid = true;
    try {
      await authAxios.put(`/colis/national-pay/${nationalCoil?._id}`, isPaid);
      await authAxios.post('/stripe', {
        token: token.id,
        amount: nationalCoil?.price,
      });
      toast.success('order has been paid :)');
      navigate('/mes-envoi');
    } catch (error) {
      toast.error(setError(error));
    }
  };

  const tokenHandler = (token) => {
    handlePayment(token);
  };

  useEffect(() => {
    dispatch(getNationalCoilById(id));
  }, [dispatch, id]);

  return (
    <DefaultLayout>s
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className=' justify-content-center'>
            <Col md={5}>
              <Card className='shadow'>
                <ListGroup>
                  <ListGroup.Item>
                    <h2 className='text-center'>Facture</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Expéditeur Nom</span>
                      <span>{nationalCoil?.expediteur.name}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Destinataire Adresse</span>
                      <span>{nationalCoil?.destinataire.address}</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Contenu Colis</span>
                      <span>{nationalCoil?.coli.content}</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Poids</span>
                      <span>{nationalCoil?.coli.weight} g</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4 className='d-flex justify-content-between align-items-center'>
                      <span>Montant</span>
                      <span>{nationalCoil?.price} dnt</span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Stripe
                      className='w-full'
                      description={`Le totale  est ${nationalCoil?.price}`}
                      name='My Ship'
                      image='/logo.png'
                      stripeKey='pk_test_51KesRYH5cYomygyIVpcJgPzIuCxSTmCZVDP07aX5Rl6fkq3LxILNREpH5VuNCw9NnNNJey4LEnPsLFaTHJaq9AiP00FJmrxaq7'
                      token={tokenHandler}
                    />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default ColiNationalPlaceorder;
