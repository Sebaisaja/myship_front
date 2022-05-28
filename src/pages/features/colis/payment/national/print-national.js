import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { Link, useParams } from 'react-router-dom';
import { getNationalCoilById } from '../../../../../store/colis/national-details';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import Loader from '../../../../../components/UI/loader';

const NationalPrint = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const params = useParams();
  const { nationalCoil, loading } = useSelector(
    (state) => state.nationalCoilById
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(getNationalCoilById(params.id));
  }, [dispatch, params]);

  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <Container ref={componentRef}>
          <h1 className='text-center text-warning mb-2 mt-2'>
            <Image
              src='/logo.png'
              className='avatar me-3 '
              roundedCircle
              alt=''
            />{' '}
            <em>My Ship</em>
          </h1>
          <Row className=' justify-content-center'>
            <Col md={6}>
              <Card className='p-5'>
                <h2 className='text-center mb-2 '>
                  <em>
                    <span className='text-warning me-2'>Colis</span>
                    d'expedition (national)
                  </em>
                </h2>
                <hr />
                <h3 className='my-2'>Expéditeur</h3>
                <p className='mb-2 text-md'>
                  {' '}
                  Nom : {nationalCoil?.expediteur.name}
                </p>

                <p className='mb-2 text-md'>
                  {' '}
                  Adresse : {nationalCoil?.expediteur.address}
                </p>

                <hr />
                <h3 className='my-2'>Destinataire</h3>
                <p className='mb-2 text-md'>
                  Nom : {nationalCoil?.destinataire.name}
                </p>

                <p className='mb-2 text-md'>
                  Adresse : {nationalCoil?.destinataire.address}
                </p>

                <hr />
                <h3 className='my-2'>Colis</h3>
                <p> Id : {nationalCoil?._id}</p>
                <p> Contenu : {nationalCoil?.coli.content}</p>
                <p> Num du Colis : {nationalCoil?.num}</p>

                <p> Poids : {nationalCoil?.coli.weight} (gram)</p>

                <hr />
                <h3 className='mb-2'>Paiement</h3>
                {nationalCoil?.method === 'online' ? (
                  <>
                    <p className='mb-1'>Method : Payer en ligne</p>
                    <p className='mb-1'>
                      is Paid :{' '}
                      {nationalCoil?.isPaid ? (
                        <span className='text-success'>Paid</span>
                      ) : (
                        <>
                          <span className='text-danger'>
                            <Link to='/noob'>not payed</Link>
                          </span>
                        </>
                      )}
                    </p>
                  </>
                ) : (
                  <p className='mb-1'>Method : Payer en agence</p>
                )}

                <h4 mt='mt-2'>Montant : {nationalCoil?.price} DNT</h4>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      <Button
        onClick={handlePrint}
        className='mt-5 mx-auto d-flex align-items-center justify-content-center w-1/3 '
      >
        Print
      </Button>
    </DefaultLayout>
  );
};

export default NationalPrint;
