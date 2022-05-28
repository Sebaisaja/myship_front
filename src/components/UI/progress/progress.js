import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsHandThumbsUp } from 'react-icons/bs';

const Progress = () => {
  return (
    <Container>
      <Row className='justify-content-center mt-6'>
        <Col md={6}>
          <div className='position-relative m-4'>
            <div className='progress' style={{ height: '1px' }}>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: '50%' }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <button
              type='button'
              className='position-absolute top-0 start-0 w-12 h-12 translate-middle btn btn-sm btn-square btn-warning rounded-circle'
            >
              <i className='fas fa-box'></i>
            </button>
            <button
              type='button'
              className='position-absolute top-0 start-1/2 w-12 h-12 translate-middle btn btn-sm btn-square btn-primary rounded-circle'
            >
              <i className='fas fa-truck'></i>
            </button>
            <button
              type='button'
              className='position-absolute top-0 start-full w-12 h-12 translate-middle btn btn-sm btn-square btn-secondary rounded-circle'
            >
              <BsHandThumbsUp size={'1.5rem'} />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Progress;
