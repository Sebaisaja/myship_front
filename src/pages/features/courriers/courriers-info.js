import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import OffersComponents from '../../../components/features/offers';
import DefaultLayout from '../../../components/layouts/default-layout';
import { courriersOffers } from '../../../data/courriers';

const CourriersPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <OffersComponents offers={courriersOffers} />
      </Container>
    </DefaultLayout>
  );
};

export default CourriersPage;
