import React from 'react';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../../../components/layouts/default-layout';
import TarifsInterieurTable from '../../../components/tables/tarifs-interieur';
import TarifsInternational from '../../../components/tables/tarifs-international';
import TarifsServices from '../../../components/tables/tarifs-services';
import TarifsDouane from '../../../components/tables/tarifs-douane';
import {
  courriersInterieurTarifs,
  courriersInternationalTarifs,
  courriersServicesTarifs,
  courriersDouaneTarifs,
} from '../../../data/courriers';

const CourriersTarifs = () => {
  return (
    <DefaultLayout>
      <h1 className='text-center'>Nos tarifs</h1>
      <Container className='mt-5'>
        <TarifsInterieurTable data={courriersInterieurTarifs} />

        <TarifsInternational data={courriersInternationalTarifs} />
        <TarifsServices data={courriersServicesTarifs} />
        <TarifsDouane data={courriersDouaneTarifs}/>
      </Container>
    </DefaultLayout>
  );
};

export default CourriersTarifs;
