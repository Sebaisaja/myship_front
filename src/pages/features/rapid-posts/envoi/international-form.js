import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import countries from '../../../../data/countries.json';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { saveRapidPostInternational } from '../../../../store/rapidpostes/international-slice';

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
    nature: yup.string().required('natureest obligatoire'),
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
    num: yup.number().required('num est obligatoire'),
    weight: yup.number().required('poids est obligatoire').positive(),
  })
  .required();

const RapidPosteInternationalForm = () => {
  const { rapidPostIinternational } = useSelector(
    (state) => state.rapidPostInternational
  );

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
    dispatch(saveRapidPostInternational(data));
    navigate('/rapidPost/international-payment');
  };

  return (
    <FormContainer
      title='Bulletin'
      name={"d'expedition (international)"}
      type='Rapide Poste '
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='expéditeur'>
            <Form.Label>Nom de l'expéditeur</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('expName', {
                value: rapidPostIinternational?.expName,
              })}
              className={errors.expName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_expéditeur'>
            <Form.Label>Adresse de l'expéditeur</Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille tunis 2017'
              {...register('expAddress', {
                value: rapidPostIinternational?.expAddress,
              })}
              className={errors.expAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='emaiil_expéditeur'>
              <Form.Label>Email de l'expéditeur</Form.Label>
              <Form.Control
                type='text'
                placeholder='exp@exemple.com'
                {...register('expEmail', {
                  value: rapidPostIinternational?.expEmail,
                })}
                className={errors.expEmail?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.expEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone de l'expéditeur</Form.Label>
              <Form.Control
                type='text'
                placeholder='75265222'
                {...register('expPhone', {
                  value: rapidPostIinternational?.expPhone,
                })}
                className={errors.expPhone?.message && 'is-invalid'}
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
                value: rapidPostIinternational?.desName,
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
                value: rapidPostIinternational?.desAddress,
              })}
              className={errors.desAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='email_Destinataire'>
              <Form.Label>Destinataire email</Form.Label>
              <Form.Control
                type='text'
                placeholder='dest@exemple.com'
                {...register('desEmail', {
                  value: rapidPostIinternational?.desEmail,
                })}
                className={errors.desEmail?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.desEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone du Destinataire</Form.Label>
              <Form.Control
                type='text'
                placeholder='52235425'
                {...register('desPhone', {
                  value: rapidPostIinternational?.desPhone,
                })}
                className={errors.desPhone?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.desPhone?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='nature'>
              <Form.Label>Nature de l'envoi</Form.Label>
              <Form.Control
                type='text'
                placeholder='Cadeau'
                {...register('nature', {
                  value: rapidPostIinternational?.nature,
                })}
                className={errors.nature?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.nature?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='country'>
              <Form.Label>Pays de destination</Form.Label>
              <Form.Select
                {...register('country', {
                  value: rapidPostIinternational?.country,
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
            <Form.Group controlId='num'>
              <Form.Label>N° du l'envoi</Form.Label>
              <Form.Control
                type='number'
                placeholder='014782'
                {...register('num', {
                  value: rapidPostIinternational?.num,
                })}
                className={errors.num?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.num?.message}</p>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='qty'>
              <Form.Label>Quantité</Form.Label>
              <Form.Select
                defaultValue={1}
                {...register('qty', {
                  value: rapidPostIinternational?.qty,
                })}
                className={errors.qty?.message && 'is-invalid'}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </Form.Select>
              <p className='invalid-feedback'>{errors.qty?.message}</p>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='weight'>
              <Form.Label>Poids(kg)</Form.Label>
              <Form.Control
                type='number'
                defaultValue={250}
                {...register('weight', {
                  value: rapidPostIinternational?.weight,
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

export default RapidPosteInternationalForm;
