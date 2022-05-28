import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import countries from '../../../../data/countries.json';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveColisInternational } from '../../../../store/colis/international-slice';
import { useNavigate } from 'react-router-dom';


const schema = yup
  .object({
    expName: yup.string().required(),
    expAddress: yup.string().required(),
    expEmail: yup.string().required().email(),
    expPhone: yup.number().required(),
    desName: yup.string().required(),
    desAddress: yup.string().required(),
    desEmail: yup.string().required().email(),
    desPhone: yup.number().required(),
    content: yup.string().required(),
    desContent: yup.string().required(),
    country: yup.string().required(),
    numColis: yup.number().required(),
    weight: yup.number().required().positive(),
    qty: yup.number().required().positive().integer(),
  })
  .required();

const ColisInternationalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colisIinternational } = useSelector(
    (state) => state.coilsInternational
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(saveColisInternational(data));
    console.log(data);
    //push
    navigate('/coils/international-payment');
  };

  // useEffect(() => {
  //   if (colisIinternational) return navigate('/checkout');
  // }, [colisIinternational]);

  return (
    <FormContainer
      title='Bulletin'
      name={"d'expedition (international)"}
      type='Colis '
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='expéditeur'>
            <Form.Label>Nom Expéditeur</Form.Label>
            <Form.Control
              {...register('expName', { value: colisIinternational?.expName })}
              type='text'
              placeholder='john doe'
            />
            <p className='text-danger'>{errors.expName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_expéditeur'>
            <Form.Label>Adresse de l'expéditeur</Form.Label>
            <Form.Control
              {...register('expAddress', {
                value: colisIinternational?.expAddress,
              })}
              type='text'
              placeholder='9 rue de marseille tunis 2017'
            />
            <p className='text-danger'>{errors.expName?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='emaiil_expéditeur'>
              <Form.Label>Email Expéditeur </Form.Label>
              <Form.Control
                type='text'
                {...register('expEmail', {
                  value: colisIinternational?.expEmail,
                })}
                placeholder='exp@exemple.com'
              />
              <p className='text-danger'>{errors.expEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone de l'expéditeur</Form.Label>
              <Form.Control
                type='text'
                placeholder='52369842'
                {...register('expPhone', {
                  value: colisIinternational?.expPhone,
                })}
              />
              <p className='text-danger'>{errors.expName?.message}</p>
            </Form.Group>
          </Col>
          <Form.Group controlId='name_destinataire'>
            <Form.Label>Nom du Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('desName', {
                value: colisIinternational?.desName,
              })}
            />
            <p className='text-danger'>{errors.expName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_destinataire'>
            <Form.Label>Adresse du Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille sfax 2017'
              {...register('desAddress', {
                value: colisIinternational?.desAddress,
              })}
            />
            <p className='text-danger'>{errors.expName?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='email_Destinataire'>
              <Form.Label>Email du Destinataire </Form.Label>
              <Form.Control
                type='text'
                placeholder='dest@exemple.com'
                {...register('desEmail', {
                  value: colisIinternational?.desEmail,
                })}
              />
              <p className='text-danger'>{errors.desEmail?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='phone_expéditeur'>
              <Form.Label>Téléphone du Destinataire </Form.Label>
              <Form.Control
                type='text'
                placeholder='52684232'
                {...register('desPhone', {
                  value: colisIinternational?.desPhone,
                })}
              />
              <p className='text-danger'>{errors.desPhone?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='contenu'>
              <Form.Label>Contenu du colis</Form.Label>
              <Form.Control
                type='text'
                placeholder='parfum/cadeau/etc'
                {...register('content', {
                  value: colisIinternational?.content,
                })}
              />
              <p className='text-danger'>{errors.content?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='designation-contenu'>
              <Form.Label>
                Désignation du Contenu
                {/* (et nombre d'objets){' '} */}
              </Form.Label>
              <Form.Control
                type='text'
                placeholder=''
                {...register('desContent', {
                  value: colisIinternational?.desContent,
                })}
              />
              <p className='text-danger'>{errors.desContent?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='pays-marchandises'>
              <Form.Label>Pays d'origine des marchandises </Form.Label>
              <Form.Control
                type='text'
                placeholder='nom de pays des marchandises'
                {...register('origine', {
                  value: colisIinternational?.origine,
                })}
              />
              <p className='text-danger'>{errors.origine?.message}</p>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId='country'>
              <Form.Label>Pays de destination</Form.Label>
              <Form.Select
                required
                {...register('country', {
                  value: colisIinternational?.country,
                })}
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
                <p className='text-danger'>{errors.country?.message}</p>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='numColis'>
              <Form.Label>N° du colis</Form.Label>
              <Form.Control
                type='number'
                placeholder='014782'
                {...register('numColis', {
                  value: colisIinternational?.numColis,
                })}
              />
              <p className='text-danger'>{errors.numColis?.message}</p>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='quantité'>
              <Form.Label>Quantité</Form.Label>
              <Form.Select
                defaultValue={1}
                {...register('qty', {
                  value: colisIinternational?.qty,
                })}
                required
                className='text-center'
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
              <p className='text-danger'>{errors.qty?.message}</p>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId='poids'>
              <Form.Label>Poids(g)</Form.Label>
              <Form.Control
                type='number'
                {...register('weight', {
                  value: colisIinternational?.weight,
                })}
                placeholder='250'
              />
              <p className='text-danger'>{errors.weight?.message}</p>
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

export default ColisInternationalForm;
