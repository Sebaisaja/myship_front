import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveLettreInterne } from '../../../../store/lettres/interne-slice';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    expName: yup.string().required(),
    expAddress: yup.string().required(),
    desName: yup.string().required(),
    desAddress: yup.string().required(),
    postalCode: yup.string().required(),
    weight: yup.number().required().positive(),
  })
  .required();

const CourrierInterneForm = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { lettreInterne } = useSelector((state) => state.lettreInterne);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(saveLettreInterne(data));
    navigate('/courriers/national-payment');
  };

  return (
    <FormContainer
      title='Bulletin'
      name={"d'expedition (interne)"}
      type='Lettre'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='expéditeur'>
            <Form.Label>Nom de l'expéditeur</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('expName', {
                value: `${userInfo?.firstName} ${userInfo?.lastName}`,
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
                value: lettreInterne?.expAddress,
              })}
              className={errors.expAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expAddress?.message}</p>
          </Form.Group>
          <Form.Group controlId='name_destinataire'>
            <Form.Label>Nom du Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('desName', {
                value: lettreInterne?.desName,
              })}
              className={errors.desName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_destinataire'>
            <Form.Label>Adresse du Destinataire </Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille sfax 2017'
              {...register('desAddress', {
                value: lettreInterne?.desAddress,
              })}
              className={errors.desName?.message && 'is-invalid'}
            />{' '}
            <p className='invalid-feedback'>{errors.desAddress?.message}</p>
          </Form.Group>

          <Form.Group controlId='contenu'>
            <Form.Label>Code Postal</Form.Label>
            <Form.Control
              type='text'
              placeholder='2074'
              {...register('postalCode', {
                value: lettreInterne?.postalCode,
              })}
              className={errors.postalCode?.message && 'is-invalid'}
            />{' '}
            <p className='invalid-feedback'>{errors.postalCode?.message}</p>
          </Form.Group>

          <Form.Group controlId='poids'>
            <Form.Label>Poids (g)</Form.Label>
            <Form.Control
              type='number'
              {...register('weight', {
                value: lettreInterne?.weight,
              })}
              placeholder='250'
              className={errors.weight?.message && 'is-invalid'}
            />{' '}
            <p className='invalid-feedback'>{errors.weight?.message}</p>
          </Form.Group>

          <Button type='submit' variant='warning' className='mt-3 w-full'>
            Confirmer
          </Button>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default CourrierInterneForm;
