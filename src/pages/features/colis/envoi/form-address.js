import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import { useDispatch, useSelector } from 'react-redux';
import { saveColisInterne } from '../../../../store/colis/interne-slice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    expName: yup.string().required('nom expéditeur est obligatoire'),
    expAddress: yup.string().required('address de expéditeur est obligatoire'),
    desName: yup.string().required('nom du destinataire est obligatoire'),
    desAddress: yup
      .string()
      .required('address de destinataire est obligatoire'),
    content: yup.string().required('contenu du colis est obligatoire'),
    numColis: yup.number().required('N° du colis est obligatoire'),
    weight: yup.number().required('poids est obligatoire').positive(),
  })
  .required();

const FormAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colisInterne } = useSelector((state) => state.coilsInterne);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(saveColisInterne(data));
    navigate('/coils/national-payment');
  };

  return (
    <FormContainer title='Bulletin' name={"d'expedition (interne)"}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='expediteur'>
            <Form.Label> Nom Expéditeur</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('expName', {
                value: colisInterne?.expName,
              })}
              className={errors.expName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_expéditeur'>
            <Form.Label>Adresse de l'expéditeur </Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille tunis 2017'
              {...register('expAddress', {
                value: colisInterne?.expAddress,
              })}
              className={errors.expAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expAddress?.message}</p>
          </Form.Group>
          <Form.Group controlId='destinataire'>
            <Form.Label> Nom du Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('desName', {
                value: colisInterne?.expName,
              })}
              className={errors.desName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_destinataire'>
            <Form.Label> Adresse du Destinataire </Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille sfax 2017'
              {...register('desAddress', {
                value: colisInterne?.desAddress,
              })}
              className={errors.desAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='contenu'>
              <Form.Label>Contenu du colis</Form.Label>
              <Form.Control
                type='text'
                placeholder='parfum'
                {...register('content', {
                  value: colisInterne?.content,
                })}
                className={errors.content?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.content?.message}</p>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId='num'>
              <Form.Label>N° du colis</Form.Label>
              <Form.Control
                type='number'
                placeholder='014782'
                {...register('numColis', {
                  value: colisInterne?.numColis,
                })}
                className={errors.numColis?.message && 'is-invalid'}
              />
              <p c className='invalid-feedback'>
                {errors.numColis?.message}
              </p>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId='poids'>
              <Form.Label>Poids(g)</Form.Label>
              <Form.Control
                placeholder='250'
                type='number'
                {...register('weight', {
                  value: colisInterne?.numColis,
                })}
                className={errors.weight?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.weight?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='warning' className='mt-3 w-full'>
          Confirmer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FormAddress;
