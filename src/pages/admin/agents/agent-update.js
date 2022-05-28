import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    cin: yup.string().required(),
    phone: yup.string().required(),
    governorate: yup.string().required(),
  })
  .required();

const AgentUpdate = () => {
  const { id } = useParams();
  const { agents } = useSelector((state) => state.agentList);
  const agent = agents.find((e) => e._id === id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onUpdate = (user) => {
    authAxios
      .put(`/users/${user._id}`, user)
      .then((res) => {
        toast.success('agent has been updated');
        navigate('/dashboard/agent-list');
      })
      .catch((e) => toast.error(setError(e)));
  };

  const onSubmit = (data) => {
    onUpdate({
      ...data,
      _id: agent?._id,
    });
  };

  return (
    <DashboardLayout>
      <Row className='justify-content-md-center mt-5 pt-5  '>
        <Col md={6} lg={6} xl={4} sm={12}>
          <Card className='shadow p-5'>
            <h1 className='text-center'> Modifier Agent</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId='firstName'>
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  {...register('firstName', {
                    value: agent?.firstName,
                  })}
                  className={errors.firstName?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.firstName?.message}</p>
              </Form.Group>

              <Form.Group controlId='lastName'>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  {...register('lastName', {
                    value: agent?.lastName,
                  })}
                  className={errors.lastName?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.lastName?.message}</p>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control
                  {...register('email', {
                    value: agent?.email,
                  })}
                  className={errors.email?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.email?.message}</p>
              </Form.Group>
              <Form.Group controlId='cin'>
                <Form.Label>CIN</Form.Label>
                <Form.Control
                  {...register('cin', {
                    value: agent?.cin,
                  })}
                  className={errors.cin?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.cin?.message}</p>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type='number'
                  {...register('phone', {
                    value: agent?.phone,
                  })}
                  className={errors.phone?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.phone?.message}</p>
              </Form.Group>

              <Form.Group controlId='governorate'>
                <Form.Label>Gouvernerat</Form.Label>
                <Form.Control
                  {...register('governorate', {
                    value: agent?.governorate,
                  })}
                  className={errors.governorate?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>
                  {errors.governorate?.message}
                </p>
              </Form.Group>
              <Form.Group controlId='governorate'>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  {...register('password', {
                    value: agent?.password,
                  })}
                  className={errors.password?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>
                  {errors.password?.message}
                </p>
              </Form.Group>

              <Form.Group className='mt-3'>
                <Button type='submit' className='w-full' variant='danger'>
                  modifier
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default AgentUpdate;
