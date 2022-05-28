import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import countries from '../../../../data/countries.json';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveLettreInternational } from '../../../../store/lettres/international-slice';

const schema = yup
  .object({
    expName: yup.string().required('nom expéditeur est obligatoire'),
    expAddress: yup.string().required('address de expéditeur est obligatoire'),
    expEmail: yup
      .string()
      .required('email du expéditeur est obligatoire')
      .email(),
    expPhone: yup.number().required('téléphone du expéditeur est obligatoire'),
    desName: yup.string().required('nom du destinataire est obligatoire'),
    desAddress: yup
      .string()
      .required('address de destinataire est obligatoire'),
    desEmail: yup
      .string()
      .required('email de destinataire est obligatoire')
      .email(),
    desPhone: yup
      .number()
      .required('téléphone de destinataire est obligatoire'),
    country: yup.string().required('country est obligatoire'),
    weight: yup.number().required('poids est obligatoire').positive(),
  })
  .required();

const CourrierInternationalForm = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { lettreIinternational } = useSelector(
    (state) => state.letterInternational
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(saveLettreInternational(data));
    navigate('/courriers/international-payment');
  };

  return (
    <FormContainer
      title='Bulletin'
      name={"d'expedition (international)"}
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
                value: lettreIinternational?.expName,
              })}
              defaultValue={`${userInfo?.firstName} ${userInfo?.lastName}`}
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
                value: lettreIinternational?.expAddress,
              })}
              className={errors.expAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='emaiil_expéditeur'>
              <Form.Label>Email de l'expéditeur </Form.Label>
              <Form.Control
                type='text'
                placeholder='expd@exemple.com'
                {...register('expEmail', {
                  value: lettreIinternational?.expEmail,
                })}
                className={errors.expEmail?.message && 'is-invalid'}
                defaultValue={userInfo?.email}
              />
              <p className='invalid-feedback'>{errors.expEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone de l'expéditeur </Form.Label>
              <Form.Control
                type='text'
                placeholder='26826412'
                {...register('expPhone', {
                  value: lettreIinternational?.expPhone,
                })}
                className={errors.expPhone?.message && 'is-invalid'}
                defaultValue={userInfo?.phone}
              />
              <p className='invalid-feedback'>{errors.expPhone?.message}</p>
            </Form.Group>
          </Col>
          <Form.Group controlId='destinataire'>
            <Form.Label>Nom Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('desName', {
                value: lettreIinternational?.desName,
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
                value: lettreIinternational?.desAddress,
              })}
              className={errors.desAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='email_Destinataire'>
              <Form.Label>Email du Destinataire</Form.Label>
              <Form.Control
                type='text'
                placeholder='dest@exemple.com'
                {...register('desEmail', {
                  value: lettreIinternational?.desEmail,
                })}
                className={errors.desEmail?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.desEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone du Destinataire </Form.Label>
              <Form.Control
                type='text'
                placeholder='20285694'
                {...register('desPhone', {
                  value: lettreIinternational?.desPhone,
                })}
                className={errors.desPhone?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.desPhone?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='country'>
              <Form.Label>Pays de destination</Form.Label>
              <Form.Select
                {...register('country', {
                  value: lettreIinternational?.country,
                })}
                className={errors.country?.message && 'is-invalid'}
              >
                {countries.map((country) => (
                  <option
                    key={country.code}
                    value={country.name}
                    defaultValue={'France'}
                  >
                    {country.name}
                  </option>
                ))}
              </Form.Select>
              <p className='invalid-feedback'>{errors.country?.message}</p>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='weight'>
              <Form.Label>Poids(g)</Form.Label>
              <Form.Control
                type='number'
                placeholder='250'
                {...register('weight')}
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

export default CourrierInternationalForm;
