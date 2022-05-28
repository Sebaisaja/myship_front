import React, { useEffect } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stripe from 'react-stripe-checkout';
import toast from 'react-hot-toast';
import authAxios from '../../../../../utils/auth-axios';
import { setError } from '../../../../../utils/error';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import Loader from '../../../../../components/UI/loader';
import { getInternationalRpById } from '../../../../../store/rapidpostes/international-details';

const RpInternationalCheckout = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { internationalRapidPost, loading } = useSelector(
    (state) => state.internationalRpList
  );
  const navigate = useNavigate();

  const handlePayment = async (token) => {
    try {
      await authAxios.post('/stripe', {
        token: token.id,
        amount: internationalRapidPost.price,
      });
      await authAxios.put(
        `/rapidPosts/stripe-pay/${internationalRapidPost._id}`
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
    dispatch(getInternationalRpById(id));
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
                      <span>Nom Expediteur </span>
                      <span>{internationalRapidPost?.expediteur?.name}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Adresse Expediteur </span>
                      <span>{internationalRapidPost?.expediteur?.address}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Nom Destinataire </span>
                      <span>{internationalRapidPost?.destinataire.name}</span>
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6 className='d-flex justify-content-between align-items-center'>
                      <span>Adresse Destinataire </span>
                      <span>
                        {internationalRapidPost?.destinataire.address}
                      </span>
                    </h6>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Pays</span>
                      <span>{internationalRapidPost?.coli.country}</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5 className='d-flex justify-content-between align-items-center'>
                      <span>Poids</span>
                      <span>{internationalRapidPost?.coli.weight} g</span>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4 className='d-flex justify-content-between align-items-center'>
                      <span>Price</span>
                      <span>{internationalRapidPost?.price} dnt</span>
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Stripe
                      className='w-full'
                      description={`Your total is ${internationalRapidPost?.price} DT`}
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

export default RpInternationalCheckout;
