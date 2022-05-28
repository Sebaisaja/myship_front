import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { Link, useParams } from 'react-router-dom';
import { getInternationalCoilById } from '../../../../../store/colis/international-details';
import DefaultLayout from '../../../../../components/layouts/default-layout';
import Loader from '../../../../../components/UI/loader';

const ColisInternationalPrint = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const componentRef = useRef();
  const { internationalCoilDetail, loading } = useSelector(
    (state) => state.internationalCoilById
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(getInternationalCoilById(id));
  }, [dispatch, id]);

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
                     (international)
                  </em>
                </h2>
                <hr />
                <h3 className='my-2'>Expéditeur</h3>
                <p className='mb-2 text-md'>
                  {' '}
                  Nom Expéditeur : {internationalCoilDetail?.expediteur.name}
                </p>
                <p className='mb-2 text-md'>
                  {' '}
                  Email Expéditeur : {internationalCoilDetail?.expediteur.email}
                </p>
                <p className='mb-2 text-md'>
                  {' '}
                  Adresse Expéditeur : {internationalCoilDetail?.expediteur.address}
                </p>
                <p className='mb-2 text-md'>
                  Téléphone Expéditeur : {internationalCoilDetail?.expediteur.phone}
                </p>
                <hr />
                <h3 className='my-2'>Destinataire</h3>
                <p className='mb-2 text-md'>
                  Nom Destinataire : {internationalCoilDetail?.destinataire.name}
                </p>
                <p className='mb-2 text-md'>
                  Email Destinataire: {internationalCoilDetail?.destinataire.email}
                </p>
                <p className='mb-2 text-md'>
                  Adresse Destinataire : {internationalCoilDetail?.destinataire.phone}
                </p>
                <p className='mb-2 text-md'>
                  Téléphone Destinataire : {internationalCoilDetail?.destinataire.phone}
                </p>
                <hr />
                <h3 className='my-2'>Colis</h3>
                <p> Id : {internationalCoilDetail?._id}</p>
                <p> Contenu Colis : {internationalCoilDetail?.coli.content}</p>
                <p> Num du Colis : {internationalCoilDetail?.numColis}</p>
                <p>
                  {' '}
                  Désignation Colis : {internationalCoilDetail?.coli.designation}
                </p>
                <p> Pays : {internationalCoilDetail?.coli.country}</p>

                <p> Poids : {internationalCoilDetail?.coli.weight} (gram)</p>
                <p> Quantité : {internationalCoilDetail?.coli.qty}</p>

                <hr />
                <h3 className='mb-2'>Payment</h3>
                {internationalCoilDetail?.method === 'online' ? (
                  <>
                    <p className='mb-1'>Method : Payer en ligne</p>
                    <p className='mb-1'>
                      is Paid :{' '}
                      {internationalCoilDetail?.isPaid ? (
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

                <h4 mt='mt-2'>Price : {internationalCoilDetail?.price} DNT</h4>
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

export default ColisInternationalPrint;
