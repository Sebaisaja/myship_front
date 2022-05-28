import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DefaultLayout from '../layouts/default-layout';

const FormContainer = ({ children, title, name, type, print }) => {
  return (
    <DefaultLayout>
      <Container ref={print}>
        <Row className=' justify-content-md-center mt-2'>
          {type && (
            <h1 className='text-center text-warning mb-2'>
              <em>{type}</em>
            </h1>
          )}
          <Col md={6}>
            <Card className='p-5'>
              <h2 className='text-center mb-2 '>
                {/* <Image
                  src='/logo-removebg-preview.png'
                  alt=''
                  roundedCircle
                  className=' h-26 w-24'
                />{' '} */}
                <em>
                  <span className='text-warning me-2'>{title}</span>
                  {name}
                </em>
              </h2>
              {children}{' '}
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default FormContainer;
