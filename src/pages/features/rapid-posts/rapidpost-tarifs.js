import React from 'react';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../../../components/layouts/default-layout';
import TarifsInterieurTable from '../../../components/tables/tarifs-interieur';
import TarifsInternational from '../../../components/tables/tarifs-international';
import TarifsServices from '../../../components/tables/tarifs-services';
import {
  rapidPosteInterieurTarifs,
  rapidPosteInternationalTarifs,
  rapidPosteServicesTarifs,
} from '../../../data/rapid-posts';

const RapidPosteTarifs = () => {
  return (
    <DefaultLayout>
      <h1 className='text-center'>Nos tarifs</h1>
      <Container className='mt-5'>
        <TarifsInterieurTable data={rapidPosteInterieurTarifs} />

        <TarifsInternational data={rapidPosteInternationalTarifs} />
        <TarifsServices data={rapidPosteServicesTarifs} />
      </Container>
    </DefaultLayout>
  );
};

export default RapidPosteTarifs;
