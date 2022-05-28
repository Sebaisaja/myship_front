import React from 'react';
import { Row, Table, Col, Card } from 'react-bootstrap';

const TarifsServices = ({ data }) => {
  return (
    <Row className=' justify-content-center my-8'>
      <Col md={8}>
        <h4 className='mb-4 text-warning '>{data.title}</h4>
        <Card className=' shadow border-0 mb-2 '>
          <Table responsive hover className='table-nowrap '>
            <thead
              style={{ backgroundColor: ' rgba(22, 34, 57, 0.95)' }}
              className='text-white'
            >
              <tr>
                <th></th>
                <th scope='col'>Régime interne</th>
                <th scope='col'>Régime International</th>
              </tr>
            </thead>
            <tbody>
              {data.tarifs.map((tarif) => (
                <tr>
                  <td>{tarif.name}</td>
                  <td>{tarif.interne} DT</td>
                  <td>{tarif.international} DT</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
};

export default TarifsServices;
