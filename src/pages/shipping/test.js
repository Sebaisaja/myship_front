import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DefaultLayout from '../../components/layouts/default-layout';
import Progress from '../../components/UI/progress/progress';
import cities from '../../data/cities.json';

const Test = () => {
  return (
    <DefaultLayout>
      <Progress />
      <Container>
        <Row className=' justify-content-center mt-6'>
          <Col md={7} className='shadow p-5 shadow bg-white rounded'>
            <h2 className='text-warning my-3'>
              Gagnez du temps pour envoyer vos colis
            </h2>

            <Form className='p-3'>
              <Row>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Départ de votre colis</Form.Label>
                    <Form.Select>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Départ de votre colis</Form.Label>
                    <Form.Select defaultValue={'Sfax'} required>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Poids</Form.Label>
                    <div className='d-flex align-items-center'>
                      <Form.Control defaultValue={0.25} type='number' />G
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Départ de votre colis</Form.Label>
                    <Form.Select>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Départ de votre colis</Form.Label>
                    <Form.Select>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                      <option value='1'>Tunis</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant='warning' className='col-10 mt-3'>
                Checkout
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Test;
