import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DefaultLayout from '../../components/layouts/default-layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authAxios from '../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import { roleCheck } from '../../utils/helper';
import { CgClose } from 'react-icons/cg';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    cin: yup.number().required(),
    phone: yup.number(),
    password: yup.string(),
    governorate: yup.string().required(),
  })

  .required();

const Profile = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const [edit, setEdit] = useState(false);

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handle = async (user) => {
    try {
      await authAxios.put('users/profile', user);
      toast.success('your account has been updated!');
    } catch (error) {
      return toast.error(setError(error));
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    handle({});
    setEdit((prevState) => (prevState = !prevState));
  };
  return (
    <DefaultLayout title={`${userInfo?.firstName} profile`}>
      <Container>
        {/* /Breadcrumb */}
        <Row className=' gutters-sm'>
          <Col md={4} className=' mb-3'>
            <Card className='card'>
              <Card.Body className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  <img
                    src='https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                    alt='Admin'
                    className='rounded-circle'
                    width={150}
                  />
                  <div className='mt-3'>
                    <h4>
                      {userInfo.firstName} {userInfo.lastName}
                    </h4>
                    <p className='text-secondary mb-1'>{roleCheck(userInfo)}</p>
                    <p className='text-muted font-size-sm'>
                      {userInfo.governorate}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className=' mb-3'>
              <Card.Body>
                <Row className='align-items-center py-2'>
                  <Col sm={3}>
                    <h6 className='mb-0'>Prénom</h6>
                  </Col>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='text'
                          {...register('firstName', {
                            value: userInfo.firstName,
                          })}
                          className={errors.firstName?.message && 'is-invalid'}
                        />
                        <p className='invalid-feedback'>
                          {errors.firstName?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo.firstName}</>
                    )}
                  </Col>
                </Row>
                <hr />
                <Row className='align-items-center py-2'>
                  <Col sm={3}>
                    <h6 className='mb-0'>Nom</h6>
                  </Col>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='text'
                          {...register('lastName', {
                            value: userInfo.lastName,
                          })}
                          className={errors.lastName?.message && 'is-invalid'}
                        />
                        <p className='invalid-feedback'>
                          {errors.lastName?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo.lastName}</>
                    )}
                  </Col>
                </Row>
                <hr />
                <Row className='align-items-center py-2'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Email</h6>
                  </div>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='email'
                          {...register('email', {
                            value: userInfo.email,
                          })}
                          className={errors.email?.message && 'is-invalid'}
                        />
                        <p className='invalid-feedback'>
                          {errors.email?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo.email}</>
                    )}
                  </Col>
                </Row>
                <hr />

                <Row className='align-items-center py-2'>
                  <Col sm={3}>
                    <h6 className='mb-0'>CIN</h6>
                  </Col>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='number'
                          {...register('cin', {
                            value: userInfo.cin,
                          })}
                          className={errors.cin?.message && 'is-invalid'}
                        />
                        <p className='invalid-feedback'>
                          {errors.cin?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo.cin}</>
                    )}
                  </Col>
                </Row>

                <hr />
                <Row className='align-items-center py-2'>
                  <Col sm={3}>
                    <h6 className='mb-0'>Téléphone</h6>
                  </Col>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='number'
                          {...register('phone', {
                            value: userInfo.phone,
                          })}
                          className={errors.phone?.message && 'is-invalid'}
                        />
                        <p className='invalid-feedback'>
                          {errors.phone?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo?.phone}</>
                    )}
                  </Col>
                </Row>
                <hr />
                <Row className='align-items-center py-2'>
                  <Col sm={3}>
                    <h6 className='mb-0'> Gouvernerat</h6>
                  </Col>
                  <Col sm={9}>
                    {edit ? (
                      <>
                        <Form.Control
                          type='text'
                          {...register('governorate', {
                            value: userInfo.governorate,
                          })}
                          className={
                            errors.governorate?.message && 'is-invalid'
                          }
                        />
                        <p className='invalid-feedback'>
                          {errors.governorate?.message}
                        </p>
                      </>
                    ) : (
                      <>{userInfo?.governorate}</>
                    )}
                  </Col>
                </Row>

                <hr />
                <Row className='align-items-center py-2'>
                <Col sm={3}>
                  <h6 className='mb-0'> Mot de passe</h6>
                </Col>
                <Col sm={9}>
                  {edit ? (
                    <>
                      <Form.Control
                        type='text'
                        {...register('password', {
                          value: userInfo.password,
                        })}
                        className={
                          errors.password?.message && 'is-invalid'
                        }
                      />
                      <p className='invalid-feedback'>
                        {errors.password?.message}
                      </p>
                    </>
                  ) : (
                    <>{userInfo?.password}</>
                  )}
                </Col>
                </Row>

                <hr/>

                <Row>
                  <Col sm={12}>
                    {edit ? (
                      <div>
                        <Button onClick={handleSubmit(onSubmit)}>Update</Button>
                        <Button
                          className='w-16'
                          size='sm'
                          variant=''
                          onClick={() =>
                            setEdit((prevState) => (prevState = !prevState))
                          }
                        >
                          <CgClose size={'1.5rem'} />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() =>
                          setEdit((prevState) => (prevState = !prevState))
                        }
                      >
                       Modifer
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Profile;
