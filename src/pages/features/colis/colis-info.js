import React from 'react';
import { Container } from 'react-bootstrap';
import OffersComponents from '../../../components/features/offers';
import DefaultLayout from '../../../components/layouts/default-layout';
import { colisOffers } from '../../../data/colis';


const ColisInfo = () => {
  return (
    <DefaultLayout>
      <Container>
        <OffersComponents offers={colisOffers} />{' '}
      </Container>
    </DefaultLayout>
  );
};

export default ColisInfo;
