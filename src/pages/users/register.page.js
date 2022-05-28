import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userRegister } from '../../store/users/register-slice';
import toast from 'react-hot-toast';

const schema = yup
  .object({
    firstName: yup.string().required('firstName est obligatoire'),
    lastName: yup.string().required('lastName est obligatoire'),
    email: yup.string().required('email est obligatoire').email(),
    cin: yup.number().required('cin est obligatoire'),
    phone: yup.number().required('telepohone est obligatoire'),
    password: yup.string().required('password est obligatoire'),
    confirmPwd: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'password does not match'),
    governorate: yup.string().required('gouvernorat est obligatoire'),
  })

  .required();

const RegisterPage = () => {
  const { success } = useSelector((state) => state.userRegister);
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
    dispatch(
      userRegister({
        cin: data.cin,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        governorate: data.governorate,
        password: data.password,
        phone: data.phone,
      })
    );
    if (success) {
      toast.success(`👏You have been Registred Please Login`);
      navigate('/login');
    }
  };

  return (
    <div className='px-5 py-5 p-lg-0 bg-surface-secondary'>
      <div className='d-flex justify-content-center'>
        <div
          id='main__bg-color'
          className='col-lg-5 col-xl-4 p-12 p-xl-20 position-fixed start-0 top-0 h-screen overflow-y-hidden  d-none d-lg-flex flex-column'
        >
          {/* Logo */}
          <Link className='d-block' to='/'>
            <img src='/logo-removebg-preview.png' alt='...' />
          </Link>
          {/* Title */}
          <div className='mt-10 mb-20'>
            <h1 className='ls-tight font-bolder display-6 text-white mb-5'>
              Votre Meilleur Choix
            </h1>
            <p className='text-white text-opacity-80'>
              MY SHIP ,me simplifie la vie au quotidien.  
            </p>
          </div>
          {/* Circle */}
          <div className='w-56 h-56 bg-orange-500 rounded-circle position-absolute bottom-0 end-20 transform translate-y-1/3' />
        </div>
        <Col
          md={9}
          lg={7}
          className='col-12  offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative'
        >
          <Row>
            <Col lg={10} md={9} xl={7} className='mx-auto ms-xl-0'>
              <div className='mt-10 mt-lg-5 mb-6 d-flex align-items-center d-lg-block'>
                <span className='d-inline-block d-lg-block h1 mb-lg-6 me-3'>
                  👋
                </span>
                <h1 className='ls-tight font-bolder h2'>Nice to see you!</h1>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control
                        placeholder='john '
                        {...register('firstName')}
                        className={errors.firstName?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.firstName?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        placeholder='john '
                        {...register('lastName')}
                        className={errors.firstName?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.firstName?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Adresse Email</Form.Label>
                      <Form.Control
                        placeholder='exmple@gmail.com'
                        {...register('email')}
                        className={errors.email?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.email?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>CIN</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='exmple@gmail.com'
                        {...register('cin')}
                        className={errors.cin?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>{errors.cin?.message}</p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Mot de Passe</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='********'
                        {...register('password')}
                        className={errors.password?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.password?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Confirmer Mot de Passe</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='********'
                        {...register('confirmPwd')}
                        className={errors.confirmPwd?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.confirmPwd?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Téléphone</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='+216'
                        {...register('phone')}
                        className={errors.phone?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.phone?.message}
                      </p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Gouvernerat</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='tunis'   
                        {...register('governorate')}
                        className={errors.governorate?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.governorate?.message}
                      </p>
                    </Form.Group>
                  </Col>

                  <Button
                    variant='warning'
                    type='submit'
                    className='w-full mt-3'
                  >
                    Inscrire
                  </Button>
                </Row>
              </Form>
             
                    
              <div className='my-6'>
                <small>Vous n'avez pas de compte</small>
                <Link
                  to='/login'
                  className='text-warning text-sm font-semibold ms-3'
                >
                  Connecter
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default RegisterPage;
