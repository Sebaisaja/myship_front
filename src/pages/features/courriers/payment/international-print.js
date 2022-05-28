import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../../../../components/layouts/default-layout';
import { useReactToPrint } from 'react-to-print';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../../../components/UI/loader';
import { getInternationalLettreById } from '../../../../store/lettres/international-detail';

const InternationalLettrePrint = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const componentRef = useRef();
  const { lettre, loading } = useSelector(
    (state) => state.letterInternationalDetail
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    dispatch(getInternationalLettreById(id));
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
                    <span className='text-warning me-2'>Lettre</span>
                    d'expedition (international)
                  </em>
                </h2>
                <hr />
                <h3 className='my-2'>Expéditeur</h3>
                <p className='mb-2 text-md'> Nom : {lettre?.expediteur.name}</p>
                <p className='mb-2 text-md'>
                  {' '}
                  Email : {lettre?.expediteur.email}
                </p>
                <p className='mb-2 text-md'>
                  {' '}
                  Adresse : {lettre?.expediteur.address}
                </p>
                <p className='mb-2 text-md'>
                Téléphone : {lettre?.expediteur.phone}
                </p>
                <hr />
                <h3 className='my-2'>Destinataire</h3>
                <p className='mb-2 text-md'>
                  Nom : {lettre?.destinataire.name}
                </p>
                <p className='mb-2 text-md'>
                  Email : {lettre?.destinataire.email}
                </p>
                <p className='mb-2 text-md'>
                  Adresse : {lettre?.destinataire.phone}
                </p>
                <p className='mb-2 text-md'>
                  Téléphone : {lettre?.destinataire.phone}
                </p>
                <hr />
                <h3 className='my-2'>Colis</h3>
                <p> Id : {lettre?._id}</p>
                <p> Contenu : {lettre?.coli.content}</p>
                <p> Num du Colis : {lettre?.numColis}</p>
                <p> Désignation : {lettre?.coli.designation}</p>
                <p> Pays : {lettre?.coli.country}</p>

                <p> Poids : {lettre?.coli.weight} (gram)</p>
                <p> Quantité : {lettre?.coli.qty}</p>

                <hr />
                <h3 className='mb-2'>Paiement</h3>
                {lettre?.method === 'online' ? (
                  <>
                    <p className='mb-1'>Méthode : Payer en ligne</p>
                    <p className='mb-1'>
                      is Paid :{' '}
                      {lettre.isPaid ? (
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

                <h4 mt='mt-2'>Montant : {lettre?.price} DNT</h4>
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

export default InternationalLettrePrint;
