import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from './product-card';

const Products = ({ data }) => {
  return (
    <Container>
      <Row>
        <h1 style={{ color: '#20458F' }}>
          Vous souhaitez <br /> <strong>{data.title}</strong>
        </h1>
        <Col md={3} className='mt-6'>
          <Image style={{ width: '35rem', height: '18rem' }} src={data.image} />
        </Col>
        <Col md={3} className='mt-6'>
          <ListGroup variant='flush' style={{ color: '#20458F' }}>
            <ListGroup.Item className='list-group-item'>
              <Link to={data.offersLink}>
                <h5 style={{ color: 'blue' }}>{data.text1}</h5>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className='list-group-item'>
              <Link to={data.tarifsLink}>
                <h5 style={{ color: 'blue' }}>{data.text2}</h5>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Row>
            {data.cards.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        </Col>
        <div className='my-6 d-flex justify-content-center flex-column align-items-center'>
          <Link to={data.offersLink} className='btn btn-warning'>
            {data.buttonLink}
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default Products;
