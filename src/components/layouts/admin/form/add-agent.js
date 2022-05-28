import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormModal from '../../../UI/modal/form-modal';
import authAxios from '../../../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../../../utils/error';

//form validation with use form hook && yup
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    cin: yup.number().required(),
    phone: yup.number().required(),
    governorate: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const AddAgentModal = ({ handleClose, show }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onAdd = async (agent) => {
    try {
      const res = await authAxios.post('/users/agent', agent);

      if (res.data) {
        toast.success('Agent has been added');
        handleClose();
        reset();
      }
    } catch (error) {
      toast.error(setError(error));
    }
  };

  const onSubmit = (data) => {
    onAdd({ ...data, isActeur: true });
  };

  return (
    <FormModal handleClose={handleClose} show={show} title='Ajouter une Agent'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type='text'
            placeholder='john'
            {...register('firstName')}
            className={errors.firstName?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.firstName?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            placeholder='doe'
            {...register('lastName')}
            className={errors.lastName?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.lastName?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Adresse Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='johndoe@gmail.com'
            {...register('email')}
            className={errors.email?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.email?.message}</p>
        </Form.Group>
        <Form.Group controlId='cin'>
          <Form.Label>CIN</Form.Label>
          <Form.Control
            type='number'
            placeholder='07192575'
            {...register('cin')}
            className={errors.cin?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.cin?.message}</p>
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type='number'
            placeholder='216xxxxxxxx'
            {...register('phone')}
            className={errors.phone?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.phone?.message}</p>
        </Form.Group>
        <Form.Group controlId='governorate'>
          <Form.Label>Gouvernerat</Form.Label>
          <Form.Control
            placeholder='governorate'
            {...register('governorate')}
            className={errors.governorate?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.governorate?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='*******'
            {...register('password')}
            className={errors.password?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.password?.message}</p>
        </Form.Group>

        <Button
          type='submit'
          className='mt-3 w-full  bg-red-600 text-white'
          variant=''
        >
          Ajouter
        </Button>
      </Form>
    </FormModal>
  );
};

export default AddAgentModal;
