import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../components/layouts/default-layout';
import Progress from '../../components/UI/progress/progress';
import cities from '../../data/cities.json';

const Checkout = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={8}></Col>
          <Col md={4}>
            <Card className='p-2'>
              <Card.Title className='text-center' as={'h2'}>
                <BsCart3 /> Payment
              </Card.Title>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Price</span>
                    <span>$500</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Price</span>
                    <span>$500</span>
                  </ListGroup.Item>{' '}
                  <ListGroup.Item
                    as={'h6'}
                    className='d-flex justify-content-between align-content-center'
                  >
                    <span>Price</span>
                    <span>$500</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className='w-full'>Pay</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Checkout;
