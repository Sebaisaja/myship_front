import React from 'react';
import { Row, Table, Col, Card } from 'react-bootstrap';

const TarifsInternational = ({ data }) => {
  return (
    <Row className=' justify-content-center my-8'>
      <Col md={8}>
        <h4 className='mb-4 text-warning p-3'>{data.title}</h4>
        <Card className=' shadow border-0 mb-2'>
          <Table responsive hover className='table-nowrap'>
            <thead
              style={{ backgroundColor: ' rgba(22, 34, 57, 0.95)' }}
              className='text-white'
            >
              <tr>
                <th scope='col'>Poids jusqu’à…</th>
                <th scope='col'>UMA</th>
                <th scope='col'>Pays Arabes Et Europe</th>
                <th scope='col'>Reste du Monde</th>
              </tr>
            </thead>
            <tbody>
              {data.tarifs.map((tarif) => (
                <tr>
                  <td>{tarif.weight}</td>
                  <td>{tarif.uma} DT</td>
                  <td>{tarif.paysArabe} DT</td>
                  <td>{tarif.resteMonde} DT</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
};

export default TarifsInternational;
