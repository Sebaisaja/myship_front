import React from 'react';
import { Row, Table, Col, Card } from 'react-bootstrap';

const TarifsAssurence = ({ data }) => {
  return (
    <Row className=' justify-content-center my-8'>
      <Col md={8}>
        <h4 className='mb-4 text-warning p-3'>{data.title}</h4>
        <Card className=' shadow border-0 mb-2'>
          <Table responsive hover className='table-nowrap'>
            <thead
              style={{ backgroundColor: ' rgba(22, 34, 57, 0.95)' }}
              className='text-white thead-light'
            >
              <tr>
                <th scope='col'>Montant Assurée</th>
                <th scope='col'>Taxe d'assurence</th>
              </tr>
            </thead>
            <tbody>
              {data.tarifs.map((tarif) => (
                <tr>
                  <td>{tarif.montant}</td>
                  <td>{tarif.taxe}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
};

export default TarifsAssurence;
