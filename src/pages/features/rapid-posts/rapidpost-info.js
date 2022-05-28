import React from 'react';
import { Container } from 'react-bootstrap';
import OffersComponents from '../../../components/features/offers';
import DefaultLayout from '../../../components/layouts/default-layout';
import { rapidPosteOffers } from '../../../data/rapid-posts';

const RapidpostInfo = () => {
  return (
    <DefaultLayout>
      <Container>
        <OffersComponents offers={rapidPosteOffers} />{' '}
      </Container>
    </DefaultLayout>
  );
};

export default RapidpostInfo;
