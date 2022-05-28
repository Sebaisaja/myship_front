import React from 'react';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../../../components/layouts/default-layout';
import TarifsInterieurTable from '../../../components/tables/tarifs-interieur';
import TarifsInternational from '../../../components/tables/tarifs-international';
import TarifsRemises from '../../../components/tables/tarifs-remises';

import {
  colisAssurenceTarifs,
  colisInterieurTarifs,
  colisInternationalTarifs,
  colisRemiseTarifs,
} from '../../../data/colis';

const ColisTarifs = () => {
  return (
    <DefaultLayout>
      <h1 className='text-center'>Nos tarifs</h1>
      <Container className='mt-5'>
        <TarifsInterieurTable data={colisInterieurTarifs} />
        <TarifsInternational data={colisInternationalTarifs} />
        <TarifsRemises data={colisRemiseTarifs} />
        <tarifsAssurence data={colisAssurenceTarifs} />
      </Container>
    </DefaultLayout>
  );
};

export default ColisTarifs;
