import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import FormContainer from '../../components/UI/form-container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createReclamation } from '../../store/reclamation/create-slice';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    username: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required().email(),
    envoiId: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const ReclamtionForm = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createReclamation(data));
    navigate('/');
  };

  return (
    <FormContainer title='Ecrire Votre Réclamtion ICI'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='nomprenom'>
            <Form.Label> Nom & Prénom</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('username', {
                value: `${userInfo.firstName} ${userInfo.lastName}`,
              })}
              className={errors.username?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.username?.message}</p>
          </Form.Group>
          <Form.Group controlId='address'>
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille tunis 2017'
              {...register('address')}
              className={errors.address?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.address?.message}</p>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Adresse Email </Form.Label>
            <Form.Control
              type='text'
              placeholder='exp@exmple.com'
              {...register('email', {
                value: userInfo.email,
              })}
              className={errors.email?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group controlId='envoiId'>
            <Form.Label>Id Envoi </Form.Label>
            <Form.Control
              type='text'
              placeholder="Copie votre id d'envoi"
              {...register('envoiId')}
              className={errors.envoiId?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.envoiId?.message}</p>
          </Form.Group>
          <Form.Group controlId='message'>
            <Form.Label> Votre Message </Form.Label>
            <Form.Control
              as={'textarea'}
              type='text'
              rows={3}
              placeholder='Votre Réclamtion'
              {...register('message')}
              className={errors.message?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.message?.message}</p>
          </Form.Group>
        </Row>
        <Button type='submit' variant='warning' className='mt-3 w-full'>
          Envoyer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ReclamtionForm;
