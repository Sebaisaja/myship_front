import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Col md={6} key={product.id} className='mt-5 '>
      <Card id='product__card' className='text-center shadow-2'>
        <Card.Img
          className='align-self-center'
          style={{ width: '150px', height: '120px' }}
          variant='top'
          src={product.image}
        />
        <Card.Body>
          <Card.Title>
            <Link to={'#'}>
              <h3>{product.name}</h3>
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
