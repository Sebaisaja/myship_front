import React, { useEffect } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stripe from 'react-stripe-checkout';
import toast from 'react-hot-toast';
import authAxios from '../../../../../utils/auth-axios';
import { setError } from '../../../../../utils/error';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import { getInternationalCoilById } from '../../../../../store/colis/international-details';
import Loader from '../../../../../components/UI/loader';

const ColiInternationalCheckout = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { internationalCoilDetail, loading } = useSelector(
    (state) => state.internationalCoilById
  );
  const navigate = useNavigate();

  const handlePayment = async (token) => {
    const isPaid = true;
    try {
      await authAxios.post('/stripe', {
        token: token.id,
        amount: internationalCoilDetail.price,
      });
      await authAxios.put(
        `/colis/national-pay/${internationalCoilDetail._id}`,
        isPaid
      );
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
    dispatch(getInternationalCoilById(id));
  }, [dispatch, id]);

  return (
    <DefaultLayout>
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
                      <span> Nom de l'Expediteur </span>
                      <span>{internationalCoilDetail?.expediteur?.name}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Expéditeur Email</span>
                      <span>{internationalCoilDetail?.expediteur?.email}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Nom Destinataire  </span>
                      <span>{internationalCoilDetail?.destinataire?.name}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span> Adresse Destinataire </span>
                      <span>
                        {internationalCoilDetail?.destinataire.address}
                      </span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span> Téléphone Destinataire</span>
                      <span>
                        {internationalCoilDetail?.destinataire?.phone}
                      </span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Contenu du Colis</span>
                      <span>{internationalCoilDetail?.coli?.content}</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Poids</span>
                      <span>{internationalCoilDetail?.coli.weight} g</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4 className='d-flex justify-content-between align-items-center'>
                      <span>Montant</span>
                      <span>{internationalCoilDetail?.price} dnt</span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Stripe
                      className='w-full'
                      description={`le montant total ${internationalCoilDetail?.price} dnt`}
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

export default ColiInternationalCheckout;
