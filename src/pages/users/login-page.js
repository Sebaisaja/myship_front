import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/users/login-slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().required('email est obligatoire').email(),
    password: yup.string().required('password est obligatoire'),
  })
  .required();

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
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
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (userInfo) return navigate('/');
  }, [userInfo]);

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
              Votre Meilleur Choix.
            </h1>
            <p className='text-white text-opacity-80'>
              MY SHIP,me simplifie la vie au quotidien.
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
            <Col lg={10} md={9} xl={6} className='mx-auto ms-xl-0'>
              <div className='mt-10 mt-lg-5 mb-6 d-flex align-items-center d-lg-block'>
                <span className='d-inline-block d-lg-block h1 mb-lg-6 me-3'>
                  👋
                </span>
                <h1 className='ls-tight font-bolder h2'>Bienvenue</h1>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                  <Form.Label htmlFor='email'> Adresse Email </Form.Label>
                  <Form.Control
                    type='email'
                    id='email'
                    placeholder='myname@mail.com'
                    {...register('email')}
                    className={errors.email?.message && 'is-invalid'}
                  />
                  <p className='invalid-feedback'>{errors.email?.message}</p>
                </div>
                <div className='mb-5'>
                  <Form.Label htmlFor='password'>Mot de passe</Form.Label>
                  <Form.Control
                    type='password'
                    id='password'
                    placeholder='********'
                    autoComplete='current-password'
                    {...register('password')}
                    className={errors.password?.message && 'is-invalid'}
                  />
                  <p className='invalid-feedback'>{errors.password?.message}</p>
                </div>
                <div className='mb-5'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='check_example'
                      id='check_example'
                    />
                    <label className='form-check-label' htmlFor='check_example'>
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <div>
                  <Button variant='warning' type='submit' className='w-full'>
                    Connecter
                  </Button>
                </div>
              </Form>
              
              <div className='my-6'>
                <small>Vous n'avez pas de compte</small>
                <Link
                  to='/register'
                  className='text-warning text-sm font-semibold ms-3'
                >
                  Inscrire
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default LoginPage;
